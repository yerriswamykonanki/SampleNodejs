var mongoose = require('mongoose')
var Options = mongoose.model('Options');

var OptionsRepository = function() {}

OptionsRepository.prototype.Insert = function(newOption, callback) {
    var new_option = new Options(newOption);
    new_option.save(function(err, option) {
        if (err)
            callback(err);
        callback(option);
    });
}
OptionsRepository.prototype.GetAllOptions = function(callback) {
    if (typeof(callback) !== 'function') {
        throw 'Callback is not a function';
    }
    Options.find({}, function(err, options) {
        if (err)
            callback(err)
        callback(options)
    })
}
OptionsRepository.prototype.GetOptionById = function(optionId, callback) {
    if (typeof(callback) !== 'function') {
        throw 'Callback is not a function';
    }
    Options.findById(optionId, function(err, option) {
        if (err)
            callback(err)
        callback(option)
    })
}

var optionsRepository = new OptionsRepository();
Object.freeze(optionsRepository);
module.exports = optionsRepository