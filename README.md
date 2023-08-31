# B2B Portals

In this repository you can find anything you need to work on the b2b portals project.

## Requirements

- [Node.js](https://nodejs.org/docs/latest-v18.x/api/index.html)
- [npm CLI](https://docs.npmjs.com/cli/v9)

## Local development

Before you start, make sure you have complete the following steps:

``` bash
# install dependencies
npm i
```

### Run the project locally

Run the following command from the root folder.

``` bash
npm run dev
```

## Commands Cheat Sheet

### Workspace

For more information check [npm CLI workspace documentation](https://docs.npmjs.com/cli/v9/using-npm/workspaces).

#### Run commands

Run the chosen command in each workspace.

``` bash
npm run <command> --workspaces
```

Run the chosen `command` on workspace `<workspace>`.

``` bash
npm run <command> -w <workspace>
```

#### Manage dependencies

Add to the root the dependency `<dependency>`.

``` bash
npm i <dependency>
```

Add to the package `<package>` the dependency `<dependency>` as `devDependencies`.

``` bash
npm i <dependency> -D -w <package>
```
