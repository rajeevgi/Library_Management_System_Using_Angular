const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
    _id : {
        type : Number,
        unique : true
    },

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