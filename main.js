var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var Answers = require('./src/MongoDb/Schemas/AnswersSchema');
var ExamStatus = require('./src/MongoDb/Schemas/ExamStatusSchema');
var Options = require('./src/MongoDb/Schemas/OptionsSchema');
var Papers = require('./src/MongoDb/Schemas/PapersSchema');
var Questions = require('./src/MongoDb/Schemas/QuestionsSchema');
var Registrations = require('./src/MongoDb/Schemas/RegistrationSchema');
var Users = require('./src/MongoDb/Schemas/UsersSchema');
var registerForExam = require('./src/Services/RegisterExam');
var config = require('./config');

var port = config.port;
global.Promise = require('bluebird');
mongoose.Promise = global.Promise;
mongoose.connect(config.dbConnectionString);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port);
console.log('Listing to port : ' + port);

var user = {
    UserName: 'Aditya',
    Email: 'aditya.vajjala@ggkteck.com',
    Password: 'aditya',
    Key: 'key',
};
app.route('/').all(function(req, res) {
    res.send('Welcome');
});

var papers = require('./MOCK_DATA (1)');
var papersTemp = [];
for (var i = 0; i < papers.length; i += 1) {
    var paper = new Papers(papers[i]);
    papersTemp.push(paper);
}
Papers.insertMany(papersTemp, function(err, data) {
    if (err) {
        console.log(err);
    }
});

var questions = require('./MOCK_DATA (2)');
var questionsTemp = [];
for (var i = 0; i < questions.length; i += 1) {
    var question = new Questions(questions[i]);
    questionsTemp.push(question);
}
Questions.insertMany(questionsTemp, function(err, data) {
    if (err) {
        console.log(err);
    }
});

var options = require('./MOCK_DATA (3)');
var optionsTemp = [];
for (var i = 0; i < options.length; i += 1) {
    var option = new Options(options[i]);
    optionsTemp.push(option);
}
Options.insertMany(optionsTemp, function(err, data) {
    if (err) {
        console.log(err);
    }
});

Papers.find({}, function(err, data) {
    if (err) console.log(err);
    console.log('Papers : ' + data.length);
});
Questions.find({}, function(err, data) {
    if (err) console.log(err);
    console.log('Questions : ' + data.length);
});
Options.find({}, function(err, data) {
    if (err) console.log(err);
    console.log('Options : ' + data.length);
});