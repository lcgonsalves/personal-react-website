var mongoose = require('mongoose');

var sectionSchema = new mongoose.Schema({
    contentType: {
        type: String,
        default: 'section'
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    location: {
        type: String
    },
    dateRange: {
        type: String
    },
    body: {
        type: String
    },
    category: {
        type: String,
        required: 'Must have a category'
    },
    length: {
        type: String,
        default: 'half'
    }
});

var Section = mongoose.model('Section', sectionSchema);

module.exports = Section;