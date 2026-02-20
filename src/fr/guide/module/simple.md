# Exemple simple

> Dans cet exemple, vous verrez comment importer nos dépendances et comment les utiliser.

## Import

Ajoutez le package à votre projet :

```sh
deno add @dftp/server
```

Puis importez :

```ts
import { Server } from "@dftp/server";
```

## Options du serveur

Créez une instance de Server avec ces options :

```ts
const server = new Server({ port: 21 });
```

### Avec support TLS/SSL

```ts
const server = new Server({
  port: 21,
  cert: Deno.readTextFileSync("cert.pem"),
  key: Deno.readTextFileSync("key.pem"),
});
```

## Gérer les connexions

Attendez les connexions et gérez l'authentification avec l'événement `on("login")` :

```ts
for await (const conn of server) {
  conn.on("login", async ({ username, password }, resolve, reject) => {
    if (username === "admin" && password === "secret") {
      resolve({ root: "/srv/ftp", uid: 1000, gid: 1000 });
    } else {
      reject();
    }
  });
}
```

## Exemple complet

```ts
import { Server } from "@dftp/server";

const server = new Server({ port: 21 });
console.log("Serveur FTP en écoute sur le port 21");

for await (const conn of server) {
  conn.on("login", async ({ username, password }, resolve, reject) => {
    if (username === "admin" && password === "secret") {
      resolve({ root: "/srv/ftp", uid: 1000, gid: 1000 });
    } else {
      reject();
    }
  });
}
```

## Avec TLS/SSL

```ts
import { Server } from "@dftp/server";

const server = new Server({
  port: 21,
  cert: Deno.readTextFileSync("cert.pem"),
  key: Deno.readTextFileSync("key.pem"),
});

console.log("Serveur FTP avec TLS en écoute sur le port 21");

for await (const conn of server) {
  conn.on("login", async ({ username, password }, resolve, reject) => {
    if (username === "admin" && password === "secret") {
      resolve({ root: "/srv/ftp", uid: 1000, gid: 1000 });
    } else {
      reject();
    }
  });
}
```
