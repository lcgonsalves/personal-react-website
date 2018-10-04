var mongoose = require('mongoose');

var categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: 'Need a category name'
        },
        page: {
            type: String,
            required: 'Must be related to a page'
        }
    }
);

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;
