# Chat2Me

Bienvenue sur *Chat2Me*, une plateforme où vous pouvez partager des messages, aimer (liker) les publications de vos amis et les retweeter pour les partager avec vos abonnés.

## Fonctionnalités

- **Publication de messages** : Publiez vos pensées, idées, ou tout autre contenu que vous souhaitez partager avec le monde.
- **Aimer (Liker) des messages** : Montrez votre appréciation pour les messages en cliquant sur le bouton "Like".
- **Retweeter des messages** : Partagez les messages d'autres utilisateurs avec vos propres abonnés en utilisant la fonction retweet.
- **Gestion des amis** : Ajoutez ou supprimez des amis et consultez la liste de vos abonnés et abonnements.
  
## Installation

### Prérequis

- [Node.js](https://nodejs.org/) 
- [MongoDB](https://www.mongodb.com/)

### Étapes

1. Installez les dépendances côté client et serveur:

```bash
npm install
```

3. Lancez le serveur :

```bash
npm start
```

Le serveur devrait maintenant être en cours d'exécution sur `http://localhost:3000`.

## Utilisation

### Publication de Messages

Pour publier un message, connectez-vous à votre compte et utilisez le formulaire de publication situé en haut de votre fil d'actualité.

### Aimer (Liker) des Messages

Cliquez sur l'icône "Like" sous un message pour montrer que vous l'aimez. Le nombre de likes sera mis à jour en temps réel.

### Retweeter des Messages

Cliquez sur l'icône "Retweet" sous un message pour le partager avec vos abonnés. Le message apparaîtra sur votre propre fil d'actualité.

## API

### Authentification

- **Créer un compte** : `POST /signup` 
  ```json
  {
    "username": "votreNom",
    "password": "votreMotDePasse"
  }
  ```
- **Se connecter** : `POST /login`
  ```json
  {
    "username": "votreNom",
    "password": "votreMotDePasse"
  }
  ```
- **Se déconnecter** : `POST /logout`

### Profil Utilisateur

- **Obtenir ses informations** : `GET /profil`
- **Obtenir les informations d'un utilisateur** : `GET /user/:id`
- **Mettre à jour la description** : `POST /user/description`
  ```json
  {
    "description": "Nouvelle description"
  }
  ```

### Messages

- **Créer un message** : `POST /message/`
  ```json
  {
    "content": "Ceci est mon message"
  }
  ```
- **Obtenir un message** : `GET /message/:msgid/get`
- **Modifier un message** : `POST /message/post/:msgid`
  ```json
  {
    "content": "Message modifié"
  }
  ```
- **Supprimer un message** : `DELETE /message/delete/:msgid`
- **Obtenir tous les messages d'un utilisateur** : `GET /message/user/:id/`
- **Obtenir les messages récents** : `GET /message/recent`
- **Liker un message** : `POST /message/:msgid/like`
- **Retweeter un message** : `POST /message/:msgid/retweet`
- **Rechercher des messages** : `POST /message/search`
  ```json
  {
    "query": "Recherche"
  }
  ```
- **Obtenir les retweets d'un utilisateur** : `GET /message/:id/retweet`
- **Obtenir les messages des abonnés** : `GET /message/follow/all`

### Réponses

- **Créer une réponse à un message** : `POST /response/:msgid`
  ```json
  {
    "content": "Ceci est une réponse"
  }
  ```
- **Obtenir toutes les réponses d'un message** : `GET /response/:msgid`

### Amis

- **Ajouter un ami** : `POST /follow/:id`
- **Supprimer un ami** : `DELETE /follow/:id`
- **Obtenir la liste de vos abonnés** : `GET /follower/:id`
- **Obtenir la liste des utilisateurs que vous suivez** : `GET /following/:id`
