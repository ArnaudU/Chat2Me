const mongoose = require('mongoose')

function createUser(req, res) {
    let username = req.body.username;
    let pwd = req.body.pwd;
    let name = req.body.name;
    //on ecrit dans la base de donnée
    res.status(200).send(`Bienvenue ${name} vous etes bien inscrit sur WorldBird!`)
}

function login(req, res) {

}
function logout(req, res) {

}

function getId(req, res) {

}

function getInfo(req, res) {

}

module.exports = {
    createUser: createUser,
    login: login,
    logout: logout,
    getId: getId,
    getInfo: getInfo
};