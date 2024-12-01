const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Pour analyser les corps des requêtes JSON

// Liste d'utilisateurs en mémoire
const users = [
    { id: 1, firstName: "John", lastName: "Doe", role: "admin" },
    { id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
    { id: 3, firstName: "Alice", lastName: "Johnson", role: "moderator" },
    { id: 4, firstName: "Bob", lastName: "Brown", role: "user" },
    { id: 5, firstName: "Charlie", lastName: "Davis", role: "admin" },
];

// GET : Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur notre API REST !');
});

// GET : Récupérer tous les utilisateurs
app.get('/users', (req, res) => {
    res.json(users);
});

// GET : Récupérer un utilisateur par ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ msg: 'Utilisateur non trouvé' });
    }
    res.json(user);
});

// POST : Ajouter un utilisateur
app.post('/users', (req, res) => {
    const { firstName, lastName, role } = req.body;

    if (!firstName || !lastName || !role) {
        return res.status(400).json({ msg: 'Tous les champs sont requis' });
    }

    const lastId = users[users.length - 1]?.id || 0;
    const newUser = {
        id: lastId + 1,
        firstName,
        lastName,
        role,
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT : Mettre à jour un utilisateur
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ msg: 'Utilisateur non trouvé' });
    }

    const { firstName, lastName, role } = req.body;
    if (firstName) users[userIndex].firstName = firstName;
    if (lastName) users[userIndex].lastName = lastName;
    if (role) users[userIndex].role = role;

    res.json({ msg: 'Utilisateur mis à jour', user: users[userIndex] });
});

// DELETE : Supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ msg: 'Utilisateur non trouvé' });
    }

    users.splice(userIndex, 1);
    res.json({ msg: 'Utilisateur supprimé' });
});

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'Erreur serveur!' });
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
