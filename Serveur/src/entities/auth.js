const User = require("../schema/userSchema")
const bcrypt = require('bcrypt');
const serveurError = require("../error/ServeurErreur")
const jwt = require('jsonwebtoken');
const LEN_HASH = 10
const LENGTH_MIN_USERNAME = 4;
const LENGTH_MIN_PASSWORD = 6;

function hasSpecialCharacters(str) {
    const regex = /[!@#$%^&*()_+-=[\]{};':"\\|,.<>?]/;
    return regex.test(str);
}

async function signup(req, res) {
    try {
        if (req.body.name.length === 0) {
            throw new Error("Entrez le nom et prenom");
        }
        if (req.body.username.length <= LENGTH_MIN_USERNAME) {
            throw new Error("Il faut un login d'au moins 5 caractères");
        }
        if (req.body.pwd.length <= LENGTH_MIN_PASSWORD) {
            throw new Error("Mot de passe trop court")
        }
        if (hasSpecialCharacters(req.body.name)) {
            throw new Error("*Pas de caractère spéciaux pour le nom")
        }
    }
    catch (err) {
        res.status(401).json({ error: err.message })
        return
    }
    finally {
        // Création d'un nouvel utilisateur à partir des informations reçues dans la requête
        const newUser = new User({
            username: req.body.username,
            pwd: await bcrypt.hash(req.body.pwd, LEN_HASH),
            name: req.body.name
        });
        //Sauvegarde du nouvel utilisateur dans la base de données
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(409).json({ error: 'Le nom d\'utilisateur est déjà utilisé.' }).end();
        }
        await newUser.save()
        res.status(200).send(`Bienvenue ${req.body.name} vous etes bien inscrit sur Chat2Me!`);
    }
}


function login(req, res) {

    User.findOne({
        username: req.body.username,
    })
        .then((user) => {

            if (user) {
                bcrypt.compare(req.body.pwd, user.pwd)
                    .then((response) => {
                        if (response) {
                            req.session.loggedIn = true;// marquer l'utilisateur comme connecté en utilisant la session
                            req.session.user = user.username;
                            req.session.user_id = user._id;
                            // Générer un token avec JWT
                            const token = jwt.sign(JSON.stringify(req.session), 'JK192DFKDFD582FDF41');
                            // Stocker le token dans la session de l'utilisateur
                            req.session.token = token;
                            res.status(200).json({ message: 'Connecter avec succes.', session: req.session });
                            return;
                        }
                        else {
                            res.status(401).json({ error: "Utilisateur ou mot de passe invalide" });
                        }
                    })
            }
            else {
                res.status(401).json({ error: "Utilisateur ou mot de passe invalide" });
            }
        })
}

function logout(req, res) {
    req.session.destroy(); // supprimer la session pour déconnecter l'utilisateur
    res.status(200).json({ message: 'Vous etes bien déconnecter!' }).end();
}


module.exports = {
    signup: signup,
    login: login,
    logout: logout,
}