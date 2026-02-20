# Installation Module

## Installer Deno 2.x

DFtpS 2.0+ nécessite **Deno 2.x**. Si vous n'avez pas encore installé Deno, allez sur le [site officiel](https://deno.land) :

```sh
# macOS/Linux
curl -fsSL https://deno.land/install.sh | sh

# Windows (PowerShell)
irm https://deno.land/install.ps1 | iex
```

## Ajouter DFtpS à Votre Projet

Ajoutez le package `@dftp/server` depuis JSR :

```sh
deno add @dftp/server
```

Cela ajoutera la dépendance à votre `deno.json` :

```json
{
  "imports": {
    "@dftp/server": "jsr:@dftp/server@^2.0.8"
  }
}
```

## Configuration VS Code

Si vous utilisez VS Code (recommandé), installez l'extension "Deno" pour un support complet.

Ouvrez VS Code dans votre répertoire de projet, et ajoutez un nouveau dossier `.vscode` avec un fichier `settings.json` :

```json
{
    "deno.enable": true
}
```

Deno est maintenant activé dans votre répertoire ! Si vous avez des problèmes, essayez de recharger VS Code avec `CTRL + Shift + P` et cherchez `Reload Window`.

## Liens

- **JSR** : [jsr.io/@dftp/server](https://jsr.io/@dftp/server)
- **GitHub** : [github.com/MNLaugh/dftps](https://github.com/MNLaugh/dftps)

Pour en savoir plus sur le module [c'est ici](./module/simple).
