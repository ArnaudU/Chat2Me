const User = require("../schema/userSchema")
const authError = require("../error/AuthErreur")
const serveurError = require("../error/ServeurErreur")
const userError = require("../error/UserErreur")
const { getFollower, getFollowing, aFollow } = require("./follow")

function deleteUser(req, res) {
    if (req.session) {
        User.deleteOne({ username: req.session.user })
            .then((data) => {
                if (data.deletedCount != 1) {
                    userError(res)
                    return;
                }
                req.session.destroy()
                res.status(200).send("Utilisateur supprimer avec succes");
            })
            .catch((err) => {
                console.error(err)
                serveurError(res)
            })
    }
    else {
        authError(res)
    }

}

async function findUser(res, who) {
    try {
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
    catch (err) {
        console.error(err);
        serveurError(res)
    };
}


function getMyInfo(req, res) {
    if (req.session) {
        return findUser(res, req.session.user)
    }
    authError(res);
}

function getInfo(req, res) {
    if (req.session) {
        return findUser(res, req.params.id)
    }
    authError(res);
}

function setDescription(req, res) {
    if (req.session) {
        User.findOneAndUpdate(
            { username: req.params.id },
            { description: req.body.description }
        )
            .then((user) => {
                if (!user) {
                    userError()
                }
                res.status(200).send("Bio modifier!")
            })
            .catch((err) => {
                console.error(err);
                serveurError(res)
            })
    }
    else {
        authError(res)
    }
}


module.exports = {
    getMyInfo: getMyInfo,
    getInfo: getInfo,
    deleteUser: deleteUser,
    setDescription: setDescription
};