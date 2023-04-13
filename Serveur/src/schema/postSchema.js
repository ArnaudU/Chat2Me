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
    username: {
        type: String, // Ajout de l'attribut username
        required: true
    },
    response: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        _id: 'auto'
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('Post', postSchema);