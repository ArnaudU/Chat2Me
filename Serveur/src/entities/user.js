const User = require("../schema/userSchema")
const userError = require("../error/UserErreur")
const { getFollower, getFollowing, aFollow } = require("./follow")

function deleteUser(req, res) {
    User.deleteOne({ username: req.session.user })
        .then((data) => {
            if (data.deletedCount != 1) {
                return userError(res)

            }
            req.session.destroy()
            res.status(200).send("Utilisateur supprimer avec succes");
        })
}

async function findUser(res, who) {
    const data = await User.findOne({ username: who })
    if (!data) {
        res.status(404).send("Utilisateur non retrouvé ou utilisateur multiple")
        return;
    }
    const followers = await getFollower(who)
    const following = await getFollowing(who)
    const followed = await aFollow(who, data.username)
    res.status(200).send(
        {
            "name": data.name,
            "username": data.username,
            "followers": followers,
            "following": following,
            "followed": followed,
            "bio": data.description
        })
}


function getMyInfo(req, res) {
    return findUser(res, req.session.user)
}

function getInfo(req, res) {
    return findUser(res, req.params.id)
}

function setDescription(req, res) {
    User.findOneAndUpdate(
        { username: req.session.user },
        { description: req.body.description }
    )
        .then((user) => {
            if (!user) {
                userError()
            }
            res.status(200).send("Bio modifier!")
        })
}


module.exports = {
    getMyInfo: getMyInfo,
    getInfo: getInfo,
    deleteUser: deleteUser,
    setDescription: setDescription
};