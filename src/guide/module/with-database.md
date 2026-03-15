# Example with database

> This example shows you how to use the FTP server with the built-in SQLite database and Argon2 password hashing.

::: tip Database Support
**Version 2.0+** uses SQLite exclusively via `@db/sqlite` for better performance and simpler deployment.
:::

## Key Points

- **`database` option**: Configure the database directly in `FTPServerOptions`
- **`server.users`**: Access the `UserRepository` via the server instance
- **`UserRepository`**: Exported instantiable class for advanced management
- **Multi-tenant**: Allows multiple servers with different databases (ideal for multi-tenant or testing)

## Import

Add the package to your project:

```sh
deno add @dftp/server
```

Import the server, user repository and Argon2:

```ts
import { Server, UserRepository } from "@dftp/server";
import { hash, verify } from "@node-rs/argon2";
```

## Initialize server with database

Pass the `database` option directly in the server options:

```ts
// Create server with its own database
const server = new Server({
  port: 21,
  database: { connector: "SQLite", filepath: "./users.db" }
});

// Access UserRepository via server.users
server.users.create({
  username: "admin",
  password: await hash("secret"),
  root: "/srv/ftp",
  uid: 1000,
  gid: 1000,
});
```

::: tip Multi-tenant and Testing
Each `Server` instance can have its own database, allowing you to run multiple isolated FTP servers (multi-tenant) or create independent test environments.
:::

## Handle connections

Authenticate users against the database:

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

## Advanced usage: Standalone UserRepository

For advanced management, you can instantiate `UserRepository` directly:

```ts
import { UserRepository } from "@dftp/server";

// Create an independent repository
const repo = new UserRepository({ connector: "SQLite", filepath: "./custom.db" });

// Manage users
repo.create({ username: "user1", password: await hash("pass"), root: "/data", uid: 1001, gid: 1001 });
const user = repo.findByUsername("user1");
```

## Full example

```ts
import { Server, UserRepository } from "@dftp/server";
import { hash, verify } from "@node-rs/argon2";

// Create server with its own database
const server = new Server({
  port: 21,
  database: { connector: "SQLite", filepath: "./users.db" }
});

// Create a user (run once)
server.users.create({
  username: "admin",
  password: await hash("secret"),
  root: "/srv/ftp",
  uid: 1000,
  gid: 1000,
});

// Start server
console.log("FTP server listening on port 21");

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

## Multi-tenant example

```ts
import { Server } from "@dftp/server";
import { hash, verify } from "@node-rs/argon2";

// Tenant A server
const serverA = new Server({
  port: 2121,
  database: { connector: "SQLite", filepath: "./tenant-a.db" }
});

// Tenant B server
const serverB = new Server({
  port: 2122,
  database: { connector: "SQLite", filepath: "./tenant-b.db" }
});

// Each server has its own isolated UserRepository
serverA.users.create({ username: "admin", password: await hash("a"), root: "/a", uid: 1000, gid: 1000 });
serverB.users.create({ username: "admin", password: await hash("b"), root: "/b", uid: 1000, gid: 1000 });
```
