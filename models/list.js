var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
    contentType: {
        type: String,
        default: 'list'
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    items: [String],
    category: {
        type: String,
        required: 'Please supply a category.'
    },
    length: {
        type: String,
        default: 'half'
    }
});

var List = mongoose.model('List', listSchema);

module.exports = List;