# Monolithic API - Authentification avec Bun, Sequelize et SQLite

Ce projet est une API monolithique construite avec **Node.js**, **Bun**, **TypeScript**, **Sequelize**, et **SQLite**. Elle gère l'authentification des utilisateurs, y compris l'inscription et la connexion, tout en mettant en avant les concepts fondamentaux des architectures monolithiques.

---

## 🚀 Objectifs du projet

1. Comprendre les bases d'une **API monolithique**.
2. Implémenter une fonctionnalité d'authentification sécurisée (inscription et connexion).
3. Explorer les principes fondamentaux avant une éventuelle migration vers une architecture microservices.

---

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [**Bun**](https://bun.sh/) (JavaScript runtime)  
  Si Bun n'est pas installé, utilisez la commande suivante pour l'installer :
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```
  Puis, ajoutez Bun au `PATH` si ce n'est pas fait automatiquement.

- [Node.js](https://nodejs.org/) (en cas de compatibilité croisée).

---

## 📂 Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/ThoRibeiro/liveCodding-Monolithic.git
   cd liveCodding-Monolithic
   ```

2. Installez les dépendances avec **Bun** :
   ```bash
   bun install
   ```

3. Configurez vos variables d'environnement :
   - Créez un fichier `.env` à la racine du projet avec le contenu suivant :
     ```env
     PORT=3000
     JWT_SECRET=yourSecretKey
     ```

4. Lancez le serveur :
   ```bash
   bun run server.ts
   ```

5. Accédez à l'API sur [http://localhost:3000](http://localhost:3000).

---

## 📚 Fonctionnalités principales

- **Inscription** (`POST /auth/register`) :
  Permet aux utilisateurs de s'inscrire avec un email unique et un mot de passe sécurisé.
- **Connexion** (`POST /auth/login`) :
  Authentifie les utilisateurs et génère un token JWT pour les futures requêtes sécurisées.
- **Architecture monolithique** :
  Tous les contrôleurs, services, modèles et routes sont regroupés dans une seule application.

---

## 🎥 Live Coding : Ce que nous allons faire

Pendant le live coding, nous allons :

1. **Configurer une nouvelle API monolithique** avec Bun.
   - Initialisation des dépendances et création de la structure du projet.

2. **Développer une fonctionnalité d'authentification :**
   - **Inscription** :
     - Vérification des données utilisateur.
     - Hachage sécurisé du mot de passe avec `bcrypt`.
     - Enregistrement dans une base de données SQLite.
   - **Connexion** :
     - Validation des informations d'identification.
     - Comparaison du mot de passe avec `bcrypt.compare`.
     - Génération d'un token JWT sécurisé.

3. **Expliquer chaque étape :**
   - La structure de l'API monolithique.
   - Les bases de données avec Sequelize et SQLite.
   - Les bonnes pratiques pour sécuriser une API.

4. **Tester les endpoints avec Postman** :
   - Vérification des routes `/auth/register` et `/auth/login`.
   - Analyse des réponses et débogage en direct.

---

## 🧪 Tester l'API

### Inscription (POST /auth/register)
**Requête :**
```bash
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com", "password": "password123"}'
```

**Réponse attendue :**
```json
{
  "message": "User registered successfully"
}
```

---

### Connexion (POST /auth/login)
**Requête :**
```bash
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com", "password": "password123"}'
```

**Réponse attendue :**
```json
{
  "token": "your_jwt_token_here"
}
```

---

## 🛠️ Technologies utilisées

- **Bun** : Pour un démarrage rapide et performant.
- **TypeScript** : Pour un typage robuste et une meilleure lisibilité.
- **Sequelize** : ORM pour la gestion des bases de données.
- **SQLite** : Base de données légère et intégrée.
- **bcrypt** : Pour le hachage des mots de passe.
- **jsonwebtoken (JWT)** : Pour l'authentification basée sur des tokens.

---

## 📂 Structure du projet

```
src/
├── config/
│   └── database.ts             // Configuration SQLite avec Sequelize
├── controllers/
│   └── auth.controller.ts      // Gestion des requêtes HTTP
├── models/
│   └── user.model.ts           // Modèle utilisateur
├── routes/
│   └── auth.routes.ts          // Routes pour l'authentification
├── services/
│   └── auth.service.ts         // Logique métier pour l'authentification
├── server.ts                   // Serveur principal Express
├── .env                        // Variables d'environnement
├── package.json
└── tsconfig.json
```

---

## 👨🏼‍💻 Auteur

**RIBEIRO Thomas / RAOUT Enguéran / BONAL Alexis**


