var mongoose = require('mongoose');

var sectionSchema = new mongoose.Schema({
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
    }
});

var Section = mongoose.model('Section', sectionSchema);

module.exports = Section;