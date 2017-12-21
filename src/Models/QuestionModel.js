var QuestionModel = (function() {
    var QuestionModel = function(questionText, createdDate, isActive, options) {
        this.text = questionText
        this.createdDate = createdDate
        this.isActive = isActive
        QuestionModel.call(this, createdDate, isActive)
        this.Initialize()
    }
    QuestionModel.prototype = Object.create(BaseModel.prototype);
    QuestionModel.prototype.constructor = QuestionModel;
    QuestionModel.prototype.Initialize = function() {
        BaseModel.prototype.Initialize.call(this);
    }
    return QuestionModel
})();

module.exports = QuestionModel