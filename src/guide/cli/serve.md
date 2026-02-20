# Run server

To launch your server:

```sh
dftps serve
```

::: tip First Launch
On first launch, the CLI automatically creates the config file at `/etc/dftps.toml`. You can then edit it to customize your server settings.
:::

## Debug mode

You can enable debug mode by adding `-d` or `--debug` to the command:

```sh
dftps serve -d
```

Or set `debug = true` in the `[options]` section of your config file.

## Example output

![output_example](../assets/server-log.gif)
