# Installation Logiciel

## Introduction

DFtpS peut être installé comme application CLI autonome. Des binaires pré-compilés sont disponibles pour Linux, macOS et Windows.

## Télécharger les binaires

Téléchargez le binaire pré-compilé pour votre plateforme depuis [GitHub Releases](https://github.com/MNLaugh/dftps/releases) :

| Plateforme | Archive |
|------------|---------|
| Linux x64 | `dftps-linux-x64.tar.gz` |
| macOS Intel | `dftps-macos-x64.tar.gz` |
| macOS Apple Silicon | `dftps-macos-arm64.tar.gz` |
| Windows x64 | `dftps-windows-x64.zip` |

## Installation via script (Linux/macOS)

```sh
curl -fsSL https://raw.githubusercontent.com/MNLaugh/dftps/main/install.sh | sh
```

::: tip Premier lancement
Au premier lancement, le CLI crée automatiquement le fichier de config à `/etc/dftps.toml`.
:::

## Configuration

Éditez le fichier de configuration `/etc/dftps.toml` :

```sh
sudo nano /etc/dftps.toml
```

```toml
[addr]
port = 21
# hostname = "127.0.0.1"

[options]
# debug = true
pasvUrl = "127.0.0.1"
pasvMin = 1024
pasvMax = 65535
# anonymous = false
# blacklist = ["DELE", "RMD"]
# webhook = "https://discord.com/api/webhooks/..."

# Configuration TLS (optionnel)
# [tls]
#   certFile = "./cert.pem"
#   keyFile = "./key.pem"

[database]
connector = "SQLite"
filepath = "./dftps.db"
```

::: tip Support Base de Données
**Version 2.0+** utilise exclusivement SQLite pour de meilleures performances et un déploiement simplifié.
:::

## Utilisation CLI

### Ajouter un utilisateur

```sh
dftps user add --username admin --password secret --root /srv/ftp --uid 1000 --gid 1000
```

### Lister les utilisateurs

```sh
dftps user
```

### Démarrer le serveur

```sh
dftps serve
```

### Mettre à jour vers la dernière version

```sh
dftps upgrade
```

Pour en savoir plus sur l'interface CLI [c'est ici](./cli).
