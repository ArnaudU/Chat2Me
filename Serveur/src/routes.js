const router = require("express").Router()
const user = require("./entities/user.js")
const post = require("./entities/post.js")
const follow = require("./entities/follow.js")
const auth = require('./entities/auth.js')

router.post("/signup", auth.signup)// permet de creer un compte
router.post("/login", auth.login) //permet de se connecter
router.post("/logout", auth.logout) //permet de se deconnecter

router.get("/", user.getMyInfo);
router.get("/user/:id", user.getInfo)// permet d'avoir l'information sur l'utilisateur
router.delete("/del", user.deleteUser)
router.put("/user/:id/description", user.setDescription)

router.post("/message/", post.createMessage)//poster un post
router.post("/message/:msgid/", post.changeMessage)//modifier un post
router.delete("/message/:msgid/", post.changeMessage)//supprimer un post
router.get("/message/:id/:msgid", post.getMessagesFromFollowsId)//permet d’obtenir l’affichage de tous les messages d’un ami followid de user dont l’id est userid
router.get("/message/:id/all", post.getMessagesFromAllFollows)//permet d’obtenir l’affichage de tous les messages de tous les amis de user dont l’id est userid
router.get("/message/:msgid/stats", post.getStats)//permet d’obtenir les stats sur les messages de l’user userid.
router.post("/message/:msgid/like", post.likeMessage)
router.post("/message/:msgid/retweet", post.retweetMessage)

router.post("/follow/:id/follow", follow.addFollow)//permet d'ajouter en amis
router.get(" /follow/:id/follow", follow.getFollowList)//permet d'obtenir la liste d'amis
router.delete("/follow/:id/follow", follow.deleteFollow)//permet de supprimer un ami

module.exports = router;