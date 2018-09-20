var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://root:N1pple1997!@ds259912.mlab.com:59912/personal-react-website');

mongoose.Promise = Promise;

module.exports.category = require('./category');
module.exports.section = require('./section');
module.exports.list = require('./list');

