var mongoose = require('mongoose')
var Registrations = mongoose.model('Registration');

var RegistrationsRepository = function() {}
RegistrationsRepository.prototype.Insert = function(newRegistration) {
    var new_registration = new Registrations(newRegistration);
    new_registration.save(function(err, registration) {
        if (err)
            callback(err);
        callback(registration);
    });
}
RegistrationsRepository.prototype.GetAllRegistrationKeys = function() {
    return Registrations.find({});
}
RegistrationsRepository.prototype.GetRegistrationByKey = function(registrationKey) {
    return Registrations.find({ Key: registrationKey })
}
RegistrationsRepository.prototype.GetRegistrationById = function(registrationId) {
    Registrations.findById(registrationId, function(err, registration) {
        if (err)
            callback(err)
        callback(registration)
    })
}
RegistrationsRepository.prototype.GetAllAdminRegistrations = function(registrationId) {
    Registrations.find({ IsAdminKey: true }, function(err, registrations) {
        if (err)
            callback(err)
        callback(registrations)
    })
}
var registrationsRepository = new RegistrationsRepository();
Object.freeze(registrationsRepository);
module.exports = registrationsRepository