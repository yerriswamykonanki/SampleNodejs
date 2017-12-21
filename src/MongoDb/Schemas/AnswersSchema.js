var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AnswersSchema = new Schema({
    QuestionId: {
        type: String,
        required: 'Kindly enter the Total Time'
    },
    Answers: {
        type: [],
        required: 'Give Questions to Paper'
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
AnswersSchema.statics.GetAll = function() {
    return this.model('Answers').find({});
}
AnswersSchema.statics.GetAnswerById = function(answerId) {
    return this.model('Answers').findById(answerId);
}
AnswersSchema.statics.GetAnswerByQuestionId = function(questionId) {
    return this.model('Answers').find({ QuestionId: questionId });
}
module.exports = mongoose.model('Answers', AnswersSchema);