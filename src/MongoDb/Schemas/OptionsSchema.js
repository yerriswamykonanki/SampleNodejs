var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OptionSchema = new Schema({
    Text: {
        type: String,
        required: 'Kindly enter the option'
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
OptionSchema.statics.GetAll = function() {
    return this.model('Options').find({});
}
OptionSchema.statics.GetOptionById = function(optionId) {
    return this.model('Options').findById(optionId);
}
module.exports = mongoose.model('Options', OptionSchema);