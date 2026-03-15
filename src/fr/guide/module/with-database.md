# Exemple avec base de données

> Cet exemple montre comment utiliser le serveur FTP avec la base de données SQLite intégrée et le hashage de mot de passe Argon2.

::: tip Support Base de Données
**Version 2.0+** utilise exclusivement SQLite via `@db/sqlite` pour de meilleures performances et un déploiement simplifié.
:::

## Points clés

- **Option `database`** : Configurez la base de données directement dans `FTPServerOptions`
- **`server.users`** : Accédez au `UserRepository` via l'instance serveur
- **`UserRepository`** : Classe instanciable exportée pour une gestion avancée
- **Multi-tenant** : Permet plusieurs serveurs avec différentes bases de données (idéal pour le multi-tenant ou les tests)

## Import

Ajoutez le package à votre projet :

```sh
deno add @dftp/server
```

Importez le serveur, le repository utilisateurs et Argon2 :

```ts
import { Server, UserRepository } from "@dftp/server";
import { hash, verify } from "@node-rs/argon2";
```

## Initialiser le serveur avec base de données

Passez l'option `database` directement dans les options du serveur :

```ts
// Créer le serveur avec sa propre base de données
const server = new Server({
  port: 21,
  database: { connector: "SQLite", filepath: "./users.db" }
});

// Accéder au UserRepository via server.users
server.users.create({
  username: "admin",
  password: await hash("secret"),
  root: "/srv/ftp",
  uid: 1000,
  gid: 1000,
});
```

::: tip Multi-tenant et Tests
Chaque instance `Server` peut avoir sa propre base de données, permettant d'exécuter plusieurs serveurs FTP isolés (multi-tenant) ou de créer des environnements de test indépendants.
:::

## Gérer les connexions

Authentifiez les utilisateurs contre la base de données :

```ts
for await (const conn of server) {
  conn.on("login", async ({ username, password }, resolve, reject) => {
    const user = server.users.findByUsername(username);
    if (user && await verify(user.password, password)) {
      resolve({ root: user.root, uid: user.uid, gid: user.gid });
    } else {
      reject();
    }
  });
}
```

## Utilisation avancée : UserRepository indépendant

Pour une gestion avancée, vous pouvez instancier `UserRepository` directement :

```ts
import { UserRepository } from "@dftp/server";

// Créer un repository indépendant
const repo = new UserRepository({ connector: "SQLite", filepath: "./custom.db" });

// Gérer les utilisateurs
repo.create({ username: "user1", password: await hash("pass"), root: "/data", uid: 1001, gid: 1001 });
const user = repo.findByUsername("user1");
```

## Exemple complet

```ts
import { Server, UserRepository } from "@dftp/server";
import { hash, verify } from "@node-rs/argon2";

// Créer le serveur avec sa propre base de données
const server = new Server({
  port: 21,
  database: { connector: "SQLite", filepath: "./users.db" }
});

// Créer un utilisateur (exécuter une fois)
server.users.create({
  username: "admin",
  password: await hash("secret"),
  root: "/srv/ftp",
  uid: 1000,
  gid: 1000,
});

// Démarrer le serveur
console.log("Serveur FTP en écoute sur le port 21");

for await (const conn of server) {
  conn.on("login", async ({ username, password }, resolve, reject) => {
    const user = server.users.findByUsername(username);
    if (user && await verify(user.password, password)) {
      resolve({ root: user.root, uid: user.uid, gid: user.gid });
    } else {
      reject();
    }
  });
}
```

## Exemple multi-tenant

```ts
import { Server } from "@dftp/server";
import { hash, verify } from "@node-rs/argon2";

// Serveur tenant A
const serverA = new Server({
  port: 2121,
  database: { connector: "SQLite", filepath: "./tenant-a.db" }
});

// Serveur tenant B
const serverB = new Server({
  port: 2122,
  database: { connector: "SQLite", filepath: "./tenant-b.db" }
});

// Chaque serveur a son propre UserRepository isolé
serverA.users.create({ username: "admin", password: await hash("a"), root: "/a", uid: 1000, gid: 1000 });
serverB.users.create({ username: "admin", password: await hash("b"), root: "/b", uid: 1000, gid: 1000 });
```
