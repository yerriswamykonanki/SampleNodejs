var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ExamStatusSchema = new Schema({
    UserId: {
        type: String,
        required: 'Kindly enter the User Id'
    },
    PaperId: {
        type: String,
        required: 'Kindly enter the PaperId'
    },
    QuestionId: {
        type: String
    },
    isAnswered: {
        type: Boolean
    },
    Answers: {
        type: []
    },
    RemainingTime: {
        type: String
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    IsActive: {
        type: Boolean,
        default: true
    }
});
ExamStatusSchema.statics.GetAll = function() {
    return this.model('ExamStatus').find({});
}
ExamStatusSchema.statics.GetStatusForPaper = function(examStatusId) {
    return this.model('ExamStatus').findById(examStatusId)
}
ExamStatusSchema.statics.GetStatusForPaper = function(paperId) {
    return this.model('ExamStatus').find({ PaperId: paperId })
}

ExamStatusSchema.statics.GetStatusForQuestion = function(questionId) {
    return this.model('ExamStatus').find({ QuestionId: questionId })
}

ExamStatusSchema.statics.GetStatusForUser = function(userId, paperId) {
    return this.model('ExamStatus').find({ UserId: userId, PaperId: paperId })
}

ExamStatusSchema.statics.GetStatusForUserAndQuestion = function(userId, questionId) {
    return this.model('ExamStatus').find({ UserId: userId, QuestionId: questionId })
}

module.exports = mongoose.model('ExamStatus', ExamStatusSchema);