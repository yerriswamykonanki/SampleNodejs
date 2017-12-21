var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
    Text: {
        type: String,
        required: 'Kindly enter the option'
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    Options: {
        type: []
    },
    IsActive: {
        type: Boolean,
        default: true
    }
});
QuestionSchema.statics.GetAll = function() {
    return this.model('Questions').find({});
}
QuestionSchema.statics.GetByQuestionId = function(questionId) {
    this.model('Questions').findById(questionId);
}
module.exports = mongoose.model('Questions', QuestionSchema);