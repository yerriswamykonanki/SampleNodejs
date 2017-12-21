const mongoose = require('mongoose')

const Options = mongoose.model('Options')

const Papers = mongoose.model('Papers')

const Questions = mongoose.model('Questions')

const Users = mongoose.model('Users')

var registerForExam = function(userDetails, registrationKey, res) {
    var user = new Users(userDetails)
    user.Key = registrationKey
    var paperPromise = getRandomQuestionPaper()
    var examPaper = undefined
    paperPromise.then(paper => {
            examPaper = paper
            return assignPaperAndSaveUser(paper, user)
        })
        .then(_user => preparePaperForUser(_user, examPaper))
        .then(model => res.json(model))
}

function preparePaperForUser(user, paper) {
    return new Promise(function(resolve, reject) {
        getPaper(user).then(paper => getQuestionsForPaper(paper))
            .then(questions => getOptionsAndFormPaperObject(questions))
            .then(questionsWithOptions => {
                var model = generateUIModel(questionsWithOptions, paper)
                resolve(model)
            })
    })

}

function generateUIModel(questionsWithOptions, paper) {
    var result = {
        paperId: paper._id.toString(),
        time: paper.Time,
    }
    formatQuestions(result, questionsWithOptions)
    return result
}

function formatQuestions(result, questionsWithOptions) {
    result.questions = []
    for (var i = 0; i < questionsWithOptions.length; i += 1) {
        var tempQuestion = questionsWithOptions[i]
        var question = {
            id: tempQuestion._id.toString(),
            text: tempQuestion.Text,
            options: []
        }
        formatOptions(question, tempQuestion._options)
        result.questions.push(question)
    }
}

function formatOptions(question, options) {
    for (var i = 0; i < options.length; i += 1) {
        var option = {}
        option.id = options[i]._id.toString()
        option.text = options[i].Text
        question.options.push(option)
    }
}

function getOptionsAndFormPaperObject(questions) {
    return new Promise(function(resolve, reject) {
        var promises = []
        for (var i = 0; i < questions.length; i += 1) {
            var promise = getOptionsForQuestion(questions[i])
            promises.push(promise)
        }
        Promise.all(promises).then(questionsWithOptions => resolve(questionsWithOptions))
    })
}

function getOptionsForQuestion(question) {
    return new Promise(function(resolve, reject) {
        var promises = []
        question._options = []
        for (var i = 0; i < question.Options.length; i++) {
            var optionId = question.Options[i]
            var promise = formatQuestionsWithOptions(question, optionId)
            promises.push(promise)
        }
        Promise.all(promises).then(questionWithOptions => resolve(question))
    })
}

function formatQuestionsWithOptions(question, optionId) {
    return new Promise(function(resolve, reject) {
        var optionPromise = Options.findById(optionId, function(err, option) {
            if (err)
                reject(err)
            question._options.push(option)
            resolve(true)
        })

    })
}

function getQuestionsForPaper(paper) {
    return new Promise(function(resolve, reject) {
        var promises = []
        for (var i = 0; i < paper.Questions.length; i += 1) {
            var questionId = paper.Questions[i]
            promises.push(Questions.findById(questionId))
        }
        var promise = Promise.all(promises)
        promise.then(questions => resolve(questions))
        promise.catch(err => reject(err))
    })
}

function getPaper(user) {
    return new Promise(function(resolve, reject) {
        var promise = Papers.findById(user.PaperId, function(err, paper) {
            if (err)
                reject(err)
            resolve(paper)
        })
    })
}

function assignPaperAndSaveUser(paper, user) {
    user.PaperId = paper._id
    return new Promise(function(resolve, reject) {
        user.save(function(err, _user) {
            if (err)
                reject(err)
            resolve(user)
        })
    })
}

function getRandomQuestionPaper() {
    return new Promise(function(resolve, reject) {
        var promise = Papers.GetAll()
        promise.then(data => {
            var paperNumber = getRandomIntInclusive(0, data.length)
            resolve(data[paperNumber])
        })
        promise.catch(err => {
            console.log(err)
        })
    })
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
        //Math.floor(Math.random() * (max - min + 1)) + min
    return 1600;
}

module.exports = registerForExam