const Post = require("../schema/postSchema")
const User = require("../schema/userSchema")
const mongoose = require('mongoose');
const authError = require("../error/AuthErreur")
const pageError = require("../error/PageErreur")
const serveurError = require("../error/ServeurErreur")
const userError = require("../error/UserErreur")

async function createMessage(req, res) {
    try {
        if (req.session.user) {
            let user = await User.findOne({ username: req.session.user })
            if (user) {
                let newComment = new Post({
                    content: req.body.content,
                    user: user.id
                });
                await newComment.save()
                res.status(200).send("Votre post est bien ajouté!")
                return
            }
            res.status(401).json({ error: "Le cookie du compte n'est pas valide" })
            return
        }

    }
    catch (err) {
        console.log(err)
        serveurError(res)
    }
}

async function getPost(msgid) {
    return await Post.findOne({ _id: msgid });
}

async function changeMessage(req, res) {
    try {
        if (req.session.user) {
            let post = getPost(req.params.msgid)
            if (!post) {
                res.status(404).json({ error: 'Message non trouvé' })
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
            else {
                res.status(401).json({ error: 'Ce message ne vous appartient pas!' })
            }
        }
        else {
            authError(res)
        }
    }
    catch (err) {
        console.log(err)
        serveurError(res0)
    }
}


function getMessagesFromFollowsId(req, res) { }

function getMessagesFromAllFollows(req, res) { }

function getStats(req, res) { }

function likeMessage(req, res) {
    //req.params.msgid et req.session.user
    if (req.session.user) {

    }
    else {
        res.send(401).json({ error: "" })
    }
}

function retweetMessage(req, res) {
    //req.params.msgid et req.session.useràp
}

module.exports = {
    createMessage: createMessage,
    changeMessage: changeMessage,
    getMessagesFromFollowsId: getMessagesFromFollowsId,
    getMessagesFromAllFollows: getMessagesFromAllFollows,
    getStats: getStats,
    likeMessage: likeMessage,
    retweetMessage: retweetMessage
}