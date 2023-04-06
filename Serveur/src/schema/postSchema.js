const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    like: {
        type: Array,
        default: []
    },
    retweet: {
        type: Array,
        default: []
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    response: {
        type: Array,
        default: []
    }
},
    {
        _id: 'auto'
    },
    {
        timestamps: true,
    });

module.exports = mongoose.model('Post', postSchema);