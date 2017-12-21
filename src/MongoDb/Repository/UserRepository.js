var mongoose = require('mongoose')
var Users = mongoose.model('Users');

var UserRepository = function() {}
UserRepository.prototype.Insert = function(newUser) {
    var new_user = new Users(newUser);
    new_user.save(function(err, task) {
        if (err)
            callback(err);
        callback(task);
    });
}
UserRepository.prototype.GetAllUsers = function() {
    Users.find({}, function(err, user) {
        if (err)
            callback(err)
        callback(user)
    })
}

UserRepository.prototype.GetUserById = function(userId) {
    Users.findById(userId, function(err, user) {
        if (err)
            callback(err)
        callback(user)
    })
}

UserRepository.prototype.GetUserByEmail = function(emailId) {
    Users.find({ Email = emailId }, function(err, user) {
        if (err)
            callback(err)
        callback(user)
    })
}
UserRepository.prototype.GetUsersByPaperId = function(paperId) {
    Users.find({ PaperId = paperId }, function(err, users) {
        if (err)
            callback(err)
        callback(users)
    })
}
var userRepository = new UserRepository();
module.exports = userRepository