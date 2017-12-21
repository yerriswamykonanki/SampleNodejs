var mongoose = require('mongoose')
var ExamStatus = mongoose.model('ExamStatus');

var ExamStatusRepository = function() {}

ExamStatusRepository.prototype.Insert = function(newExamStatus) {
    var new_examStatus = new ExamStatus(newExamStatus);
    new_examStatus.save(function(err, examStatus) {
        if (err)
            callback(err);
        callback(examStatus);
    });
}
ExamStatusRepository.prototype.GetAllOptions = function() {
    ExamStatus.find({}, function(err, examStatus) {
        if (err)
            callback(err)
        callback(examStatus)
    })
}
ExamStatusRepository.prototype.GetExamStatusById = function(examStatusId) {
    ExamStatus.findById(examStatusId, function(err, examStatus) {
        if (err)
            callback(err)
        callback(examStatus)
    })
}
ExamStatusRepository.prototype.GetStatusForPaper = function(paperId) {
    ExamStatus.find({ PaperId: paperId }, function(err, examStatus) {
        if (err)
            callback(err)
        callback(examStatus)
    })
}

ExamStatusRepository.prototype.GetStatusForQuestion = function(questionId) {
    ExamStatus.find({ QuestionId: questionId }, function(err, examStatus) {
        if (err)
            callback(err)
        callback(examStatus)
    })
}
ExamStatusRepository.prototype.GetStatusForUser = function(userId) {
    ExamStatus.find({ UserId: userId }, function(err, examStatus) {
        if (err)
            callback(err)
        callback(examStatus)
    })
}

ExamStatusRepository.prototype.GetStatusForUserInPaper = function(userId, paperId) {
    ExamStatus.find({ UserId: userId, PaperId: paperId }, function(err, examStatus) {
        if (err)
            callback(err)
        callback(examStatus)
    })
}
ExamStatusRepository.prototype.GetStatusForUserAndQuestion = function(userId, questionId) {
    ExamStatus.find({ UserId: userId, QuestionId: questionId }, function(err, examStatus) {
        if (err)
            callback(err)
        callback(examStatus)
    })
}

var examStatusRepository = new ExamStatusRepository();
Object.freeze(examStatusRepository);
module.exports = examStatusRepository