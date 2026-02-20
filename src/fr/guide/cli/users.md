# Gérer les utilisateurs FTP

> Dans cette section, vous verrez comment ajouter, voir les informations ou supprimer un utilisateur et voir la liste des utilisateurs.

## Ajouter un utilisateur

Pour ajouter un utilisateur, vous devez exécuter la commande suivante avec ces paramètres obligatoires :

- **--username** ou **-u** - Nom d'utilisateur du compte FTP
- **--password** ou **-p** - Mot de passe du compte FTP
- **--root** ou **-r** - Répertoire du compte FTP
- **--uid** - ID utilisateur du compte FTP *(Vous pouvez le trouver avec `id -u` ou `id -u username`)*
- **--gid** - ID groupe du compte FTP *(Vous pouvez le trouver avec `id -g` ou `id -g username`)*

Si vous voulez utiliser un utilisateur virtuel (qui n'a pas de compte sur la machine), vous devrez lui donner les IDs correspondant à l'utilisateur propriétaire du dossier.

```sh
dftps user add --username monuser --password monmotdepasse --root /monrepertoire --uid 1000 --gid 1000
```

Ou avec les flags courts :

```sh
dftps user add -u monuser -p monmotdepasse -r /monrepertoire --uid 1000 --gid 1000
```

## Obtenir un utilisateur

Pour obtenir les informations d'un utilisateur particulier :

```sh
dftps user get --username monuser
```

Ce qui affichera quelque chose comme :

```log
┌────────────────┬───────────────────────────────┬──────┬──────┐
│ Username       │ Folder                        │ uid  │ gid  │
├────────────────┼───────────────────────────────┼──────┼──────┤
│ monuser        │ /monrepertoire                │ 1000 │ 1000 │
└────────────────┴───────────────────────────────┴──────┴──────┘
```

## Lister tous les utilisateurs

Pour voir la liste de tous les utilisateurs :

```sh
dftps user
```

Ce qui affichera quelque chose comme :

```log
┌────────────────┬───────────────────────────────┬──────┬──────┐
│ Username       │ Folder                        │ uid  │ gid  │
├────────────────┼───────────────────────────────┼──────┼──────┤
│ admin          │ /srv/ftp                      │ 1000 │ 1000 │
├────────────────┼───────────────────────────────┼──────┼──────┤
│ virtuel        │ /home/user/virtuel            │ 1000 │ 1000 │
└────────────────┴───────────────────────────────┴──────┴──────┘
```

## Supprimer un utilisateur

Pour supprimer un utilisateur :

```sh
dftps user del --username monuser
```
