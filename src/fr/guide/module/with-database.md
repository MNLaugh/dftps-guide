# Exemple avec base de données

> Cet exemple montre comment utiliser le serveur FTP avec la base de données SQLite intégrée et le hashage de mot de passe Argon2.

::: tip Support Base de Données
**Version 2.0+** utilise exclusivement SQLite via `@db/sqlite` pour de meilleures performances et un déploiement simplifié.
:::

## Import

Ajoutez le package à votre projet :

```sh
deno add @dftp/server
```

Importez le serveur, les utilitaires de base de données et Argon2 :

```ts
import { createDb, Server, Users } from "@dftp/server";
import { hash, verify } from "@node-rs/argon2";
```

## Initialiser la base de données

SQLite est le seul connecteur de base de données supporté :

```ts
// Initialiser la base de données SQLite
createDb({ connector: "SQLite", filepath: "./users.db" });
```

## Créer des utilisateurs

Utilisez Argon2id pour un hashage sécurisé des mots de passe :

```ts
// Créer un utilisateur avec mot de passe hashé
Users.create({
  username: "admin",
  password: await hash("secret"),
  root: "/srv/ftp",
  uid: 1000,
  gid: 1000,
});
```

## Gérer les connexions

Authentifiez les utilisateurs contre la base de données :

```ts
const server = new Server({ port: 21 });

for await (const conn of server) {
  conn.on("login", async ({ username, password }, resolve, reject) => {
    const user = Users.findByUsername(username);
    if (user && await verify(user.password, password)) {
      resolve({ root: user.root, uid: user.uid, gid: user.gid });
    } else {
      reject();
    }
  });
}
```

## Exemple complet

```ts
import { createDb, Server, Users } from "@dftp/server";
import { hash, verify } from "@node-rs/argon2";

// Initialiser la base de données
createDb({ connector: "SQLite", filepath: "./users.db" });

// Créer un utilisateur (exécuter une fois)
Users.create({
  username: "admin",
  password: await hash("secret"),
  root: "/srv/ftp",
  uid: 1000,
  gid: 1000,
});

// Démarrer le serveur
const server = new Server({ port: 21 });
console.log("Serveur FTP en écoute sur le port 21");

for await (const conn of server) {
  conn.on("login", async ({ username, password }, resolve, reject) => {
    const user = Users.findByUsername(username);
    if (user && await verify(user.password, password)) {
      resolve({ root: user.root, uid: user.uid, gid: user.gid });
    } else {
      reject();
    }
  });
}
```
