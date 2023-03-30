const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {

    }
})


function addFriend(req, res) {

}

function getFriendList(req, res) {

}

function deleteFriend(req, res) {

}

function getInfos(req, res) {

}

module.exports = {
    addFriend: addFriend,
    getFriendList: getFriendList,
    deleteFriend: deleteFriend,
    getInfos: getInfos
};