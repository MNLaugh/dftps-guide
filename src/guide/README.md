# Introduction

![BANNER](https://github.com/MNLaugh/dftps/raw/main/assets/dftps_logo.png)

## What is DFtpS?

DFtpS is a modern FTP server built for Deno 2.x. Version 2.0.8 has been fully modernized with:

- **JSR-based imports** (`@std/*`, `@db/sqlite`, `@cliffy/*`)
- **SQLite database** via `@db/sqlite` native
- **Argon2id password hashing** via `@node-rs/argon2`
- **TLS/SSL support** (AUTH TLS, PROT P - RFC 2228)
- **Native Streams API** (no more BufReader/BufWriter)
- **Full TypeScript strict mode**
- **44 FTP commands** with full RFC compliance

### RFC Compliance

- RFC 959 - FTP de base (100%)
- RFC 2228 - FTP Security
- RFC 2389 - Feature negotiation (FEAT)
- RFC 2428 - IPv6 Extensions (EPSV, EPRT)
- RFC 3659 - Extensions (MDTM, SIZE, REST STREAM)

## Quality

| Metric | Value |
|--------|-------|
| Tests | 544 passing |
| Coverage | 84.8% |
| JSR Score | 100% |

## Getting Started

You have two options to use DFtpS:

1. **Use the CLI software** - Download pre-compiled binaries and run DFtpS as a standalone FTP server. See [Software Setup](./soft-setup)

2. **Use the Deno module** - Import `@dftp/server` from JSR to build your own custom FTP server. See [Mod Setup](./mod-setup)
