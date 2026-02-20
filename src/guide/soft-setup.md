# Software Setup

## Introduction

DFtpS can be installed as a standalone CLI application. Pre-compiled binaries are available for Linux, macOS, and Windows.

## Download binaries

Download the pre-compiled binary for your platform from [GitHub Releases](https://github.com/MNLaugh/dftps/releases):

| Platform | Archive |
|----------|---------|
| Linux x64 | `dftps-linux-x64.tar.gz` |
| macOS Intel | `dftps-macos-x64.tar.gz` |
| macOS Apple Silicon | `dftps-macos-arm64.tar.gz` |
| Windows x64 | `dftps-windows-x64.zip` |

## Install via script (Linux/macOS)

```sh
curl -fsSL https://raw.githubusercontent.com/MNLaugh/dftps/main/install.sh | sh
```

::: tip First Launch
On first launch, the CLI automatically creates the config file at `/etc/dftps.toml`.
:::

## Configuration

Edit the configuration file `/etc/dftps.toml`:

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

# TLS Configuration (optional)
# [tls]
#   certFile = "./cert.pem"
#   keyFile = "./key.pem"

[database]
connector = "SQLite"
filepath = "./dftps.db"
```

::: tip Database Support
**Version 2.0+** uses SQLite exclusively for better performance and simpler deployment.
:::

## CLI Usage

### Add a user

```sh
dftps user add --username admin --password secret --root /srv/ftp --uid 1000 --gid 1000
```

### List users

```sh
dftps user
```

### Start the server

```sh
dftps serve
```

### Update to latest version

```sh
dftps upgrade
```

To learn more about the CLI interface [it is here](./cli).
