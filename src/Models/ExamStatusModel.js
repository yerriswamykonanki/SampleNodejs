var ExamStatusModel = (function() {
    var ExamStatusModel = function(userId, paperId, questionId, isAnswered, answers, remainingTime, createdDate, isActive) {
        this._userId = userId
        this._paperId = paperId
        this._questionId = questionId
        this._isAnswered = isAnswered
        this._answers = answers
        this._remainingTime = remainingTime
        BaseModel.call(this,createdDate,isActive)
        this.Initialize();
    }
    ExamStatusModel.prototype = Object.create(BaseModel.prototype);
    ExamStatusModel.prototype.constructor = ExamStatusModel;
    ExamStatusModel.prototype.Initialize = function() {
        BaseModel.prototype.Initialize.call(this);
        if (this._answers === undefined) {
            this._answers = []
        }
    }
})();