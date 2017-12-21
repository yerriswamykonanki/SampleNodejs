var OptionModel = (function() {
    var OptionModel = function(optionText, createdDate, isActive) {
        this.text = optionText
        BaseModel.call(this, createdDate, isActive)
        this.Initialize()
    }
    OptionModel.prototype = Object.create(BaseModel.prototype);
    OptionModel.prototype.constructor = OptionModel;
    OptionModel.prototype.Initialize = function() {
        BaseModel.prototype.Initialize.call(this);
    }
    return OptionModel;
})();

module.exports = OptionModel