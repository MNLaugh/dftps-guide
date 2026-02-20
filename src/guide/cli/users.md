# Manage FTP users

> In this section you will see how you can add, view information or delete a user and see the list of users.

## Add a user

To add a user you will need to make the following command with these mandatory parameters:

- **--username** or **-u** - Username of FTP account
- **--password** or **-p** - Password of FTP account
- **--root** or **-r** - Directory of FTP account
- **--uid** - User id of FTP account *(You can find it with `id -u` or `id -u username`)*
- **--gid** - Group id of FTP account *(You can find it with `id -g` or `id -g username`)*

If you want to use a virtual user (who has no account on the machine) you will have to give them the ids corresponding to the user owner of the folder.

```sh
dftps user add --username myuser --password mypassword --root /mydirectory --uid 1000 --gid 1000
```

Or with short flags:

```sh
dftps user add -u myuser -p mypassword -r /mydirectory --uid 1000 --gid 1000
```

## Get a user

To get the information of a particular user:

```sh
dftps user get --username myuser
```

Which will output something like this:

```log

 Username        Folder                         uid   gid  

 myuser          /mydirectory                   1000  1000 

```

## List all users

To see the list of all users:

```sh
dftps user
```

Which will output something like this:

```log

 Username        Folder                         uid   gid  

 admin           /srv/ftp                       1000  1000 

 virtualuser     /home/user/virtualuser         1000  1000 

```

## Delete a user

To delete a user:

```sh
dftps user del --username myuser
```
