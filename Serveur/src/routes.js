const router = require("express").Router()
const user = require("./entities/user.js")
const post = require("./entities/post.js")
const follow = require("./entities/follow.js")
const auth = require('./entities/auth.js')
const serveurError = require("./error/ServeurErreur.js")
const tokenError = require("./error/TokenErreur.js")



//Pour toute les routes on verifie si il est connecté 
router.use((req, res, next) => {
    if (!(req.path === '/signup' || req.path === '/login' || req.path === '/logout')) {
        if (!req.session) {
            return authError(res);
        }
        if (!req.session.loggedIn) {
            req.session.destroy();
            return tokenError(res)
        }
    }
    try {
        next();
    }
    catch (err) {
        console.error(err);
        serveurError(res)
    }
});

router.post("/signup", auth.signup)//OK// permet de creer un compte
router.post("/login", auth.login) //OK//permet de se connecter
router.post("/logout", auth.logout)//OK //permet de se deconnecter

router.get("/profil", user.getMyInfo);//OK
router.get("/user/:id", user.getInfo)//OK// permet d'avoir l'information sur l'utilisateur
router.post("/user/description", user.setDescription)//OK

router.post("/message/", post.createMessage)//OK//poster un post
router.get("/message/:msgid/get", post.getMessage)
router.post("/message/post/:msgid", post.setOrDelMessage)//OK//modifier un post
router.delete("/message/delete/:msgid", post.setOrDelMessage)//OK//supprimer un post
router.get("/message/user/:id/", post.getMessagesFromId)//permet d’obtenir l’affichage de tous les messages d’un id de user dont l’id est ":id"

router.get("/message/recent", post.getRecentPost)//permet d’obtenir les stats sur les messages de l’user userid.
router.post("/message/:msgid/like", post.likeMessage)//OK
router.post("/message/:msgid/retweet", post.retweetMessage)//OK
router.post("/message/search", post.searchMessage)
router.get("/message/:id/retweet", post.getRetweetPostByUser)
router.get("/message/follow/all", post.getMessagesFromAllFollower)//permet d’obtenir l’affichage de tous les amis messages de tous les amis de user dont l’id est userid

router.post("/response/:msgid", post.createResponse)
router.get("/response/:msgid", post.getAllResponse)


router.post("/follow/:id", follow.setFollow)//permet d'ajouter en amis
router.delete("/follow/:id", follow.setFollow)//permet de supprimer un ami
router.get("/follower/:id", follow.getFollowerList)//permet d'obtenir la liste d'amis
router.get("/following/:id", follow.getFollowingList)//permet d'obtenir la liste d'amis



module.exports = router;