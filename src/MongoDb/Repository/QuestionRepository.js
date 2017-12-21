var mongoose = require('mongoose')
var Questions = mongoose.model('Questions');

var QuestionsRepository = function() {}
QuestionsRepository.prototype.Insert = function(newQuestion, callback) {
    var new_question = new Questions(newQuestion);
    new_question.save(function(err, question) {
        if (err)
            callback(err);
        callback(question);
    });
}
QuestionsRepository.prototype.GetAllQuestions = function(callback) {
    if (typeof(callback) !== 'function') {
        throw 'Callback is not a function';
    }
    Questions.find({}, function(err, questions) {
        if (err)
            callback(err)
        callback(questions)
    })
}
QuestionsRepository.prototype.GetQuestionById = function(questionId, callback) {
    if (typeof(callback) !== 'function') {
        throw 'Callback is not a function';
    }
    Questions.findById(questionId, function(err, question) {
        if (err)
            callback(err)
        callback(question)
    })
}
var questionsRepository = new QuestionsRepository();
Object.freeze(questionsRepository);
module.exports = questionsRepository