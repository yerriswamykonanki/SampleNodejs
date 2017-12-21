var BaseModel = (function(){
    var BaseModel = function(createdDate,isActive){
        this._createdDate = createdDate
        this._isActive = isActive
    }
    BaseModel.prototype.Initialize = function(){
        if (this._createdDate) {
            return;
        }
        this._createdDate = new Date()
        if (this._isActive === undefined) {
            this._isActive = true;
        }
    }
    return BaseModel;
})()