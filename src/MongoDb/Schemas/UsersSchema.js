var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UsersSchema = new Schema({
    UserName: {
        type: String,
        required: 'Kindly enter the Total Time'
    },
    Email: {
        type: String,
        required: 'Kindly enter the email'
    },
    Password: {
        type: String
    },
    Key: {
        type: String,
        required: 'Kindly enter the Key'
    },
    PaperId: {
        type: String,
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

UsersSchema.statics.GetAll = function() {
    return this.model('Users').find({});
}
UsersSchema.statics.GetUserById = function(userId) {
    return this.model('Users').findById(userId)
}

UsersSchema.statics.GetUserByEmail = function(emailId) {
    return this.model('Users').find({ Email: emailId })
}
UsersSchema.statics.GetUsersByPaperId = function(paperId) {
    return this.model('Users').find({ PaperId: paperId })
}
module.exports = mongoose.model('Users', UsersSchema);