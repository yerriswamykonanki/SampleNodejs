var RegistrationModel = (function() {
    var RegistrationModel = function(key, password, isAdminKey, createdDate, isActive) {
        this._key = key
        this._password = password
        this._isAdminKey = isAdminKey
        this._createdDate = createdDate
        this._isActive = isActive
        BaseModel.call(this,createdDate,isActive)
        this.Initialize()
    }
    RegistrationModel.prototype = Object.create(BaseModel.prototype);
    RegistrationModel.prototype.constructor = RegistrationModel;
    RegistrationModel.prototype.Initialize = function() {
        BaseModel.prototype.Initialize.call(this);
    }
    return RegistrationModel
})();

module.exports = RegistrationModel