var mongoose = require('mongoose');

var categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: 'Need a category name'
        }
    }
);

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;
