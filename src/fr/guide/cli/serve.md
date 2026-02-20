# Lancer le serveur

Pour lancer votre serveur :

```sh
dftps serve
```

::: tip Premier lancement
Au premier lancement, le CLI crée automatiquement le fichier de config à `/etc/dftps.toml`. Vous pouvez ensuite l'éditer pour personnaliser les paramètres de votre serveur.
:::

## Mode debug

Vous pouvez activer le mode debug en ajoutant `-d` ou `--debug` à la commande :

```sh
dftps serve -d
```

Ou définissez `debug = true` dans la section `[options]` de votre fichier de config.

## Exemple de sortie

![output_example](../../../guide/assets/server-log.gif)
