const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required:true
    },
    date: {
        type: String,
        required: true
    }
})

const Blog = new mongoose.model('Blog', BlogSchema);
module.exports = {Blog};