const userError = require('../error/UserErreur');
const Follow = require('../schema/followSchema')
const User = require("../schema/userSchema")

async function setFollow(req, res) {

    const follower = req.session.user;
    let userToFollow = await User.findOne({ username: req.params.id });
    if (!userToFollow) {
        return userError(res)
    }
    let following = userToFollow.username

    // Vérifie si la relation "follow" n'existe pas déjà
    const existingFollow = await Follow.findOne({
        follower: follower,
        following: following
    });

    if (req.method === 'POST') {
        if (!existingFollow) {
            let newFollow = new Follow({
                follower: follower,
                following: following
            });
            // Sauvegarde la nouvelle relation "follow" dans la base de données
            await newFollow.save();
            return res.status(200).json(newFollow);
        }
        return res.status(400).json({ error: 'La relation existe deja' });
    }
    if (req.method === 'DELETE') {
        if (existingFollow) {
            await existingFollow.deleteOne();
            return res.status(200).json({ message: "Le follow a été supprimé avec succès." });
        }
        return res.status(400).json({ error: 'La relation n\'existe pas' });
    }
}



async function getFollowList(req, res, which, who) {
    let userFind = await User.findOne({ username: req.params.id });
    if (!userFind) {
        return userError(res)
    }
    let userid = userFind.username
    let followers = await Follow.find({ [which]: userid }).select(`${who}`);
    res.status(200).send(followers)

}

function getFollowerList(req, res) {
    return getFollowList(req, res, "following", "follower")
}

function getFollowingList(req, res) {
    return getFollowList(req, res, "follower", "following")
}

async function getFollower(followerID) {
    return (
        // Récupère tous les documents de la collection Follow où le follower est donné
        await Follow.find({ following: followerID }, 'follower')
    )
}
async function getFollowing(followerID) {
    return (
        // Récupère tous les documents de la collection Follow où le follower est donné
        await Follow.find({ follower: followerID }, 'following')
    )
}

async function aFollow(followerID, followedID) {
    return (
        await Follow.find({ follower: followerID, following: followedID }).length
    )
}

module.exports = {
    setFollow: setFollow,
    getFollowerList: getFollowerList,
    getFollowingList: getFollowingList,
    getFollower: getFollower,
    getFollowing: getFollowing,
    aFollow: aFollow
};