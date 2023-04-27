const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {

        //nom de l'utilisateur
        name: {
            type: String,
            required: true
        },
        //pseudo de l'utilisateur
        username: {
            type: String,
            required: true,
            unique: true,
        },
        //mot de passe
        pwd: {
            type: String,
            required: true,
        },
        //Bio qui décrit l'utilisateur
        description: {
            type: String,
            max: 100,
            default: ""
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    //Date de création de l'utilisateur
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
