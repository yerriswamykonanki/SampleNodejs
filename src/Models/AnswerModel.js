var AnswerModel = (function () {
    var AnswerModel = function (questionId, answers, createdDate, isActive) {
        this._questionId = questionId
        this._answers = answers
        BaseModel.call(this, createdDate, isActive)
        this.Initialize()
    }
    AnswerModel.prototype = Object.create(BaseModel.prototype);
    AnswerModel.prototype.constructor = AnswerModel;
    AnswerModel.prototype.Initialize = function () {
        BaseModel.prototype.Initialize.call(this);
    }
    return AnswerModel
})();