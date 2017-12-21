var UserModel = (function() {
    var UserModel = function(usename, email, password, key, paperId, createdDate, isActive) {
        this._userName = username
        this._email = email
        this._password = password
        this._key = key
        this._paperId = paperId
        this._createdDate = createdDate
        this._isActive = isActive
        BaseModel.call(this,createdDate,isActive)
        this.Initialize()
    }
    UserModel.prototype = Object.create(BaseModel.prototype);
    UserModel.prototype.constructor = UserModel;
    UserModel.prototype.Initialize = function() {
        BaseModel.prototype.Initialize.call(this);
    }
    return UserModel
})();

module.exports = { UserModel }