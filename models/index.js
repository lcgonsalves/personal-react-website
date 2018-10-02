var mongoose = require('mongoose');
var db 		 = require('../config.js');
mongoose.set('debug', true);
mongoose.connect(db);

mongoose.Promise = Promise;

module.exports.category = require('./category');
module.exports.section = require('./section');
module.exports.list = require('./list');

