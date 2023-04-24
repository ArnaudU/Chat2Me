const Post = require("../schema/postSchema")
const User = require("../schema/userSchema")
const Follow = require('../schema/followSchema')
const authError = require("../error/AuthErreur")
const pageError = require("../error/PageErreur")

async function createMessage(req, res) {

    let user = await User.findOne({ username: req.session.user })
    if (user) {
        let newComment = new Post({
            content: req.body.content,
            user: user.id,
            username: user.username
        });
        await newComment.save()
        res.status(200).send("Votre post est bien ajouté!")
        return
    }
    res.status(401).json({ error: "Le cookie du compte n'est pas valide" })
}

function getPost(msgid) {
    return Post.findOne({ _id: msgid });
}

async function setOrDelMessage(req, res) {
    let post = await getPost(req.params.msgid)
    if (!post) {
        pageError(res)
    }
    if (post.user.equals(req.session.user_id)) {
        if (req.method === 'POST') {
            await Post.findOneAndUpdate(
                {
                    _id: req.params.msgid,
                    user: req.session.user_id
                },
                { $set: { content: req.body.content } }
            )
            res.status(200).send("Message modifier!")
            return
        }

        else {
            if (req.method === 'DELETE') {
                await Post.deleteOne(
                    {
                        _id: req.params.msgid,
                        user: req.session.user_id
                    },
                )
                res.status(200).send("Message supprimer!")
            }
        }
    }
    else {
        res.status(401).json({ error: 'Ce message ne vous appartient pas!' })
    }
}


async function getMessagesFromId(req, res) {
    let user = await User.findOne({ username: req.params.id }).select('_id').exec()
    let posts = await Post.find({ user: user })
        .select('-__v')
        .sort({ createdAt: -1 })
        .exec()
    res.status(200).json(posts)
}


async function getMessagesFromAllFollower(req, res) {
    let user = await User.findOne({ username: req.params.id }).select('_id').exec()
    let follows = await Follow.find({ follower: user }).select('followed -_id').exec()
    let followedIds = follows.map((follow) => follow.followed)
    let posts = await Post.find({ user: { $in: followedIds } }).select('-_id -__v').exec()
    res.status(200).json(posts)
}

async function getRecentPost(req, res) {
    const posts = await Post.find()
        .sort({ createdAt: -1 }) // trier par date de création décroissante
    res.status(200).json(posts).end();
}

async function updateLikeOrRt(req, res, array) {
    //req.params.msgid et req.session.user

    let post = await Post.findOne(
        { _id: req.params.msgid }
    )
    if (!post) {
        return pageError;
    }
    let action;
    if (post[array].includes(req.session.user)) {
        // Si l'utilisateur a déjà liké le post, on le retire du tableau
        action = { $pull: { [array]: req.session.user } };
    } else {
        // Sinon, on l'ajoute au tableau
        action = { $push: { [array]: req.session.user } };
    }
    const updatedPost = await Post.findOneAndUpdate(
        { _id: req.params.msgid },
        action,
        { new: true }
    );
    if (!updatedPost) {
        return res.status(400).json({ error: "Impossible de mettre à jour le post." });
    }
    res.status(200).json(updatedPost)
}


async function likeMessage(req, res) {
    updateLikeOrRt(req, res, "like")
}

function retweetMessage(req, res) {
    //req.params.msgid et req.session.user
    updateLikeOrRt(req, res, "retweet")
}

async function getMessage(req, res) {
    let post = await Post.findOne({ _id: req.params.msgid })
    res.status(200).send(post)
}

module.exports = {
    createMessage: createMessage,
    getMessage: getMessage,
    setOrDelMessage: setOrDelMessage,
    getMessagesFromId: getMessagesFromId,
    getMessagesFromAllFollower: getMessagesFromAllFollower,
    getRecentPost: getRecentPost,
    likeMessage: likeMessage,
    retweetMessage: retweetMessage
}