const pageError = require('../error/PageErreur');
const serveurError = require('../error/ServeurErreur');
const userError = require('../error/UserErreur');
const Follow = require('../schema/followSchema')
const User = require("../schema/userSchema")

async function setFollow(req, res) {
    if (!req.session.user) {
        return authError(res);
    }
    try {
        const follower = req.session.user_id;
        let userToFollow = await User.findOne({ username: req.params.id });
        if (!userToFollow) {
            return userError(res)
        }
        let followed = userToFollow._id

        // Vérifie si la relation "follow" n'existe pas déjà
        const existingFollow = await Follow.findOne({
            follower: follower,
            followed: followed
        });

        if (req.method === 'POST') {
            if (!existingFollow) {
                const newFollow = new Follow({
                    follower: follower,
                    followed: followed
                });
                // Sauvegarde la nouvelle relation "follow" dans la base de données
                await newFollow.save();
                return res.status(200).json(newFollow);
            }
            return res.status(400).json({ error: 'La relation existe deja' });
        }
        if (existingFollow) {
            await existingFollow.deleteOne();
            return res.status(200).json({ message: "Le follow a été supprimé avec succès." });
        }
        return res.status(400).json({ error: 'La relation n\'existe pas' });
    } catch (err) {
        console.error(err);
        serveurError(res)
    }
}

async function getFollowList(req, res, which) {
    if (!req.session.user) {
        return authError(res);
    }
    try {
        if (!req.params.id) {
            return await Follow.find({ [which]: req.session.user_id })
        }
        else {
            let userFind = await User.findOne({ username: req.params.id });
            if (!userFind) {
                return userError(res)
            }
            let userid = userFind._id
            return await Follow.find({ [which]: userid });
        }
    }
    catch (err) {
        console.error(err);
        serveurError(res)
    }
}

function getFollowerList(req, res) {
    return getFollowList(req, res, "follower")
}

function getFollowedList(req, res) {
    return getFollowList(req, res, "followed")
}

function getInfos(req, res) {

}

module.exports = {
    setFollow: setFollow,
    getFollowerList: getFollowerList,
    getFollowedList: getFollowedList,
    getInfos: getInfos
};