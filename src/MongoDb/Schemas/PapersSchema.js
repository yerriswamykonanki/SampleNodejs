var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PapersSchema = new Schema({
    Time: {
        type: String,
        required: 'Kindly enter the Total Time'
    },
    Questions: {
        type: [],
        required: 'Give Questions to Paper'
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
PapersSchema.statics.GetAll = function() {
    return this.model('Papers').find({});
}
PapersSchema.statics.GetByPaperId = function(paperId) {
    return Papers.findById(paperId);
}
module.exports = mongoose.model('Papers', PapersSchema);