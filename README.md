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

Finally:
- in the `strapi-cms` app (`apps/strapi-cms`), create a `.env` starting from `.env.example`, setting the `DATABASE_CLIENT` variable to either 'sqlite' or 'postgres'.
(It is completely acceptable to simply copy and rename the file. In which case `DATABASE_CLIENT` will already be set to 'sqlite'.)

While SQLite requires no further configuration, some extra steps need to be taken to utilize PostgreSQL:
- A local instance of PostgreSQL must be running. It must also contain a schema that's either empty or that's only been accessed by Strapi itself in the past.
- The variables listed under `#POSTGRESQL` in the `.env.example` file must be filled out.


### Run the project locally

Run the following command from the root folder.

``` bash
npm run dev
```

Open [http://localhost:1337/admin/](http://localhost:1337/admin/) with your browser to access the CMS admin panel. (You will be asked to create a user on first launch.)

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

Add to the workspace `<workspace>` the dependency `<dependency>` as `devDependencies`.

``` bash
npm i <dependency> -D -w <workspace>
```

## Changelog

To generate the changelog, the project uses [changesets](https://github.com/changesets/changesets). To add information into the changelog run `npx changeset` or `npm run changeset` and follow the wizard. Changeset will asks what kind of changes is made (major, minor, patch) and also a summary; the entered summary is what will be visible into the CHANGELOG file.

The `.github/workflows/changelog.yaml` workflow is an action that uses the [changeset's action](https://github.com/changesets/action) it is used to convert the changes tracked with `npm run changeset` into a `CHANGELOG.md` file. It will, then, create a PR with the proposed changes (it will bump the version, update the `CHANGELOG.md` file, ...). If many changes happen when that PR is open, changeset's bot automatically updates it according to the changes (it looks to the `.changeset` folder).
