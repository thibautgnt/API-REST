
# API REST Simple avec Node.js et Express

Ce projet est une API REST basique utilisant Node.js et Express, permettant de réaliser des opérations CRUD (Create, Read, Update, Delete) sur des utilisateurs en mémoire.

## 📋 Prérequis

- **Node.js** et **npm** installés sur votre machine.
- Un éditeur de texte comme **Visual Studio Code**.

## 🚀 Installation et Lancement du Projet

1. **Initialiser le projet**  
   Dans un terminal, lancez la commande suivante pour initialiser le projet et créer un fichier `package.json` :

   ```bash
   npm init -y
   ```

2. **Installer les dépendances**  
   Installez **Express** et **Nodemon** pour démarrer le serveur et recharger automatiquement à chaque modification :

   ```bash
   npm install express
   npm install --save-dev nodemon
   ```

3. **Configurer le script de démarrage**  
   Dans `package.json`, modifiez la section `"scripts"` pour inclure le script de démarrage avec Nodemon :

   ```json
   "scripts": {
     "start": "nodemon index.js"
   }
   ```

4. **Démarrer le serveur**  
   Pour démarrer le serveur, exécutez la commande suivante :

   ```bash
   npm start
   ```

   Le serveur fonctionnera sur `http://localhost:3000`.

## 📖 Fonctionnalités de l'API

| Méthode | Route           | Description                                |
|---------|------------------|--------------------------------------------|
| GET     | `/`             | Récupère tous les utilisateurs             |
| POST    | `/`             | Ajoute un nouvel utilisateur               |
| GET     | `/:id`          | Récupère un utilisateur par son ID         |
| PUT     | `/:id`          | Met à jour un utilisateur par son ID       |
| DELETE  | `/:id`          | Supprime un utilisateur par son ID         |

## 🛠️ Exemples d'utilisation avec Postman

1. **GET** `/` - Récupérer tous les utilisateurs.
2. **POST** `/` - Ajouter un utilisateur en passant les données au format JSON dans le corps de la requête.
3. **GET** `/:id` - Récupérer un utilisateur spécifique par son ID.
4. **PUT** `/:id` - Mettre à jour les informations d'un utilisateur existant par son ID.
5. **DELETE** `/:id` - Supprimer un utilisateur existant par son ID.


