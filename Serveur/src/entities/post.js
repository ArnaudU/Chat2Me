const Post = require("../schema/postSchema")
const User = require("../schema/userSchema")
const Follow = require('../schema/followSchema')
const authError = require("../error/AuthErreur")
const pageError = require("../error/PageErreur")
const serveurError = require("../error/ServeurErreur")
const userError = require("../error/UserErreur")

async function createMessage(req, res) {
    try {
        if (!req.session) {
            authError(res)
        }
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
        return
    }

    catch (err) {
        console.log(err)
        serveurError(res)
    }
}

function getPost(msgid) {
    return Post.findOne({ _id: msgid });
}

async function setOrDelMessage(req, res) {
    if (!req.session) {
        return authError(res)
    }
    try {
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

    catch (err) {
        //console.log(err)
    }
}


async function getMessagesFromId(req, res) {
    if (!req.session) {
        return authError(res)
    }
    try {
        let user = await User.findOne({ username: req.params.id }).select('_id').exec()
        let posts = await Post.find({ user: user })
            .select('-__v')
            .sort({ createdAt: -1 })
            .exec()
        res.status(200).json(posts)
    }
    catch (err) {
        console.log(err);
        serveurError(res)
    }
}

async function getMessagesFromAllFollower(req, res) {
    if (!req.session) {
        return authError(res)
    }
    try {
        let user = await User.findOne({ username: req.params.id }).select('_id').exec()
        let follows = await Follow.find({ follower: user }).select('followed -_id').exec()
        let followedIds = follows.map((follow) => follow.followed)
        let posts = await Post.find({ user: { $in: followedIds } }).select('-_id -__v').exec()
        res.status(200).json(posts)
    }
    catch (err) {
        console.log(err);
        serveurError(res)
    }
}

async function getRecentPost(req, res) {
    if (!req.session) {
        return authError(res)
    }
    const n = req.query.n || 10; // par défaut, on récupère les 10 posts les plus courants
    try {
        const posts = await Post.find()
            .sort({ createdAt: -1 }) // trier par date de création décroissante
            .limit(n); // limiter à 10 résultats
        res.status(200).json(posts).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

async function updateLikeOrRt(req, res, array) {
    //req.params.msgid et req.session.user
    if (!req.session.loggedIn) {
        req.session.destroy();
        return authError(res)
    }
    try {
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
    catch (err) {
        console.log(err);
        serveurError(res)
    }
}

async function likeMessage(req, res) {
    updateLikeOrRt(req, res, "like")
}

function retweetMessage(req, res) {
    //req.params.msgid et req.session.user
    updateLikeOrRt(req, res, "retweet")
}

async function getMessage(req, res) {
    if (!req.session) {
        return authError(res)
    }
    try {
        let post = await Post.findOne({ _id: req.params.msgid })
        res.status(200).send(post)
    }
    catch (err) {
        console.log(err);
        serveurError(res)
    }
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