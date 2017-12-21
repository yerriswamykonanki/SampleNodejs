var mongoose = require('mongoose')
var Papers = mongoose.model('Papers');

var PapersRepository = function() {}
PapersRepository.prototype.Insert = function(newPaper, callback) {
    var new_paper = new Papers(newPaper);
    new_paper.save(function(err, paper) {
        if (err)
            callback(err);
        callback(paper);
    });
}
PapersRepository.prototype.GetAllPapers = function(callback) {
    if (typeof(callback) !== 'function') {
        throw 'Callback is not a function';
    }
    Papers.find({}, function(err, papers) {
        if (err)
            callback(err)
        callback(papers)
    })
}
PapersRepository.prototype.GetPaperById = function(paperId, callback) {
    if (typeof(callback) !== 'function') {
        throw 'Callback is not a function';
    }
    Papers.findById(paperId, function(err, paper) {
        if (err)
            callback(err)
        callback(paper)
    })
}

var papersRepository = new PapersRepository();
Object.freeze(papersRepository);
module.exports = papersRepository