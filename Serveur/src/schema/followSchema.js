const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const followSchema = new Schema({
    //Type User qui montre qui est la personne qui veut suivre l'autre utilisateur
    follower: {
        type: String,
        required: true
    },
    //Type User qui montre quelle est la personne que "follower" suit
    following: {
        type: String,
        required: true
    }
},
    {
        _id: 'auto'
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Follow', followSchema);