
# API REST Simple avec Node.js et Express

Ce projet est une API REST basique utilisant Node.js et Express, permettant de réaliser des opérations CRUD (Create, Read, Update, Delete) sur une liste d'utilisateurs stockée en mémoire.

---

## 📋 Prérequis

- **Node.js** et **npm** installés sur votre machine.
- Un éditeur de texte comme **Visual Studio Code**.

---

## 🚀 Installation et Lancement du Projet

1. **Initialiser le projet**  
   Ouvrez un terminal dans le répertoire souhaité et lancez la commande suivante pour initialiser un fichier `package.json` :

   ```bash
   npm init -y
   ```

2. **Installer les dépendances**  
   Installez les dépendances nécessaires, notamment **Express** pour le serveur et **Nodemon** pour le rechargement automatique lors des modifications :

   ```bash
   npm install express
   npm install --save-dev nodemon
   ```

3. **Configurer le script de démarrage**  
   Dans le fichier `package.json`, modifiez la section `"scripts"` pour inclure le script suivant :

   ```json
   "scripts": {
     "start": "nodemon index.js"
   }
   ```

4. **Créer le fichier principal**  
   Créez un fichier `index.js` et ajoutez-y votre code API.

5. **Démarrer le serveur**  
   Lancez le serveur avec la commande suivante :

   ```bash
   npm start
   ```

   Par défaut, le serveur sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000).

---

## 📖 Fonctionnalités de l'API

| Méthode | Route           | Description                                  |
|---------|------------------|----------------------------------------------|
| **GET** | `/users`         | Récupère tous les utilisateurs               |
| **POST**| `/users`         | Ajoute un nouvel utilisateur                 |
| **GET** | `/users/:id`     | Récupère un utilisateur spécifique par son ID|
| **PUT** | `/users/:id`     | Met à jour un utilisateur existant par son ID|
| **DELETE**| `/users/:id`   | Supprime un utilisateur existant par son ID  |

---

## 🛠️ Exemples d'utilisation avec Postman

1. **GET** `/users`
   - Récupère la liste complète des utilisateurs.
   - Exemple de réponse :
     ```json
     [
       { "id": 1, "firstName": "John", "lastName": "Doe", "role": "admin" },
       { "id": 2, "firstName": "Jane", "lastName": "Smith", "role": "user" }
     ]
     ```

2. **POST** `/users`
   - Ajoute un utilisateur en passant les données au format JSON dans le corps de la requête.
   - Corps de requête :
     ```json
     {
       "firstName": "Emma",
       "lastName": "Wilson",
       "role": "editor"
     }
     ```
   - Exemple de réponse :
     ```json
     {
       "id": 3,
       "firstName": "Emma",
       "lastName": "Wilson",
       "role": "editor"
     }
     ```

3. **GET** `/users/:id`
   - Récupère un utilisateur spécifique par son ID.
   - Exemple : `/users/1`
   - Exemple de réponse :
     ```json
     { "id": 1, "firstName": "John", "lastName": "Doe", "role": "admin" }
     ```

4. **PUT** `/users/:id`
   - Met à jour un utilisateur existant en passant les données à modifier dans le corps de la requête.
   - Corps de requête :
     ```json
     {
       "firstName": "UpdatedName",
       "role": "moderator"
     }
     ```
   - Exemple de réponse :
     ```json
     {
       "msg": "Utilisateur mis à jour",
       "user": {
         "id": 1,
         "firstName": "UpdatedName",
         "lastName": "Doe",
         "role": "moderator"
       }
     }
     ```

5. **DELETE** `/users/:id`
   - Supprime un utilisateur existant par son ID.
   - Exemple : `/users/1`
   - Exemple de réponse :
     ```json
     { "msg": "Utilisateur supprimé" }
     ```

