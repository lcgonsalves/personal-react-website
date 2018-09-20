var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    items: [String],
    body: {
        type: String
    },
    category: {
        type: String,
        required: 'Please supply a category.'
    }
});

var List = mongoose.model('List', listSchema);

module.exports = List;