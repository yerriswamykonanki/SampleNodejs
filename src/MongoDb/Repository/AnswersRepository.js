var mongoose = require('mongoose')
var Answers = mongoose.model('Answers');

var AnswersRepository = function() {}
AnswersRepository.prototype.Insert = function(newAnswer, callback) {
    var new_answer = new Answers(newAnswer);
    new_answer.save(function(err, answer) {
        if (err)
            callback(err);
        callback(answer);
    });
}
AnswersRepository.prototype.GetAllAnswers = function(callback) {
    if (typeof(callback) !== 'function') {
        throw 'Callback is not a function';
    }
    Answers.find({}, function(err, answers) {
        if (err)
            callback(err)
        callback(answers)
    })
}
AnswersRepository.prototype.GetAnswerById = function(answerId, callback) {
    if (typeof(callback) !== 'function') {
        throw 'Callback is not a function';
    }
    Answers.findById(answerId, function(err, answer) {
        if (err)
            callback(err)
        callback(answer)
    })
}

AnswersRepository.prototype.GetAnswerByQuestionId = function(questionId, callback) {
    if (typeof(callback) !== 'function') {
        throw 'Callback is not a function';
    }
    Answers.find({ QuestionId: questionId }, function(err, answer) {
        if (err)
            callback(err)
        callback(answer)
    })
}

var answersRepository = new AnswersRepository();
Object.freeze(answersRepository);
module.exports = answersRepository