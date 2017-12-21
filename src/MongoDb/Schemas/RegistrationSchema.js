var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RegistrationSchema = new Schema({
    Key: {
        type: String,
        required: 'Kindly enter the Total Time'
    },
    Password: {
        type: String,
        required: 'Give Questions to Paper'
    },
    IsAdminKey: {
        type: Boolean,
        required: ''
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
RegistrationSchema.statics.GetAll = function() {
    return this.model('Registrations').find({});
}
RegistrationSchema.statics.GetRegistrationByKey = function(registrationKey) {
    return this.model('Registrations').find({ Key: registrationKey })
}
RegistrationSchema.statics.GetRegistrationById = function(registrationId) {
    return this.model('Registrations').findById(registrationId)
}
RegistrationSchema.statics.GetAllAdminRegistrations = function(registrationId) {
    return this.model('Registrations').find({ IsAdminKey: true })
}
module.exports = mongoose.model('Registrations', RegistrationSchema);