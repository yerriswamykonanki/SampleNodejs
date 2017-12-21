var PaperModel = (function() {
    var PaperModel = function(timeLimit, questions, createdDate, isActive) {
        this.time = timeLimit
        this.questions = questions
        this.createdDate = createdDate
        this.isActive = isActive
        BaseModel.call(this, createdDate, isActive)
        this.Initialize();
    }
    PaperModel.prototype = Object.create(BaseModel.prototype);
    PaperModel.prototype.constructor = PaperModel;
    PaperModel.prototype.Initialize = function() {
        BaseModel.prototype.Initialize.call(this);
    }
    return PaperModel
})();

module.exports = PaperModel