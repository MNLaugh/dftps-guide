# Module Setup

## Install Deno 2.x

DFtpS 2.0+ requires **Deno 2.x**. If you have not yet installed Deno, go to the [website](https://deno.land):

```sh
# macOS/Linux
curl -fsSL https://deno.land/install.sh | sh

# Windows (PowerShell)
irm https://deno.land/install.ps1 | iex
```

## Add DFtpS to Your Project

Add the `@dftp/server` package from JSR:

```sh
deno add @dftp/server
```

This will add the dependency to your `deno.json`:

```json
{
  "imports": {
    "@dftp/server": "jsr:@dftp/server@^2.0.8"
  }
}
```

## VS Code Setup

If you are using VS Code (recommended), install the "Deno" extension for complete Deno support.

Open VS Code in your project directory, and add a new directory `.vscode` with a file `settings.json` in it:

```json
{
    "deno.enable": true
}
```

Deno is now enabled in your directory! If you are having issues, try reloading VS Code with `CTRL + Shift + P` and search `Reload Window`.

## Links

- **JSR**: [jsr.io/@dftp/server](https://jsr.io/@dftp/server)
- **GitHub**: [github.com/MNLaugh/dftps](https://github.com/MNLaugh/dftps)

To learn more about the module [it is here](./module/simple).
