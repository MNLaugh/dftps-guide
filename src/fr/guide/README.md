# Introduction

![BANNER](https://github.com/MNLaugh/dftps/raw/main/assets/dftps_logo.png)

## Qu'est-ce que DFtpS ?

DFtpS est un serveur FTP moderne conçu pour Deno 2.x. La version 2.0.8 a été entièrement modernisée avec :

- **Imports JSR** (`@std/*`, `@db/sqlite`, `@cliffy/*`)
- **Base de données SQLite** via `@db/sqlite` natif
- **Hashage Argon2id** via `@node-rs/argon2`
- **Support TLS/SSL** (AUTH TLS, PROT P - RFC 2228)
- **API Streams native** (plus de BufReader/BufWriter)
- **Mode strict TypeScript complet**
- **44 commandes FTP** avec conformité RFC complète

### Conformité RFC

- RFC 959 - FTP de base (100%)
- RFC 2228 - Sécurité FTP
- RFC 2389 - Négociation de fonctionnalités (FEAT)
- RFC 2428 - Extensions IPv6 (EPSV, EPRT)
- RFC 3659 - Extensions (MDTM, SIZE, REST STREAM)

## Qualité

| Métrique | Valeur |
|----------|--------|
| Tests | 544 passants |
| Couverture | 84.8% |
| Score JSR | 100% |

## Pour Commencer

Vous avez deux options pour utiliser DFtpS :

1. **Utiliser le logiciel CLI** - Téléchargez les binaires pré-compilés et lancez DFtpS comme serveur FTP autonome. Voir [Installation Logiciel](./soft-setup)

2. **Utiliser le module Deno** - Importez `@dftp/server` depuis JSR pour créer votre propre serveur FTP personnalisé. Voir [Installation Module](./mod-setup)
