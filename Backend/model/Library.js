const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },

    author : {
        type : String,
        required: true
    },

    description : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Library', librarySchema);