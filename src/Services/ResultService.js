const _userRepository = require('../MongoDb/Repository/UserRepository')

const _registrationRepository = require('../MongoDb/Repository/RegistrationRepository')

const _questionRepository = require('../MongoDb/Repository/QuestionRepository')

const _optionRepository = require('../MongoDb/Repository/OptionsRepository')

const _paperRepository = require('../MongoDb/Repository/PaperRepository')

const _examstatusRepository = require('../MongoDb/Repository/ExamStatusRepository')

var ResultService = (function() {

    var ResultService = function() {}

    ResultService.prototype.ValidateQuestion = function(examStatus) {}

    ResultService.prototype.ValidatePaperForUser = function(userId, paperId) {}

    ResultService.prototype.ValidateAllPaperForUser = function(userId) {}

})();

module.exports = ResultService