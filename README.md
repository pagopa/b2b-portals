# B2B Portals

In this repository you can find everything you need to work on the B2B Portals project.

## Requirements

- [Node.js](https://nodejs.org/docs/latest-v22.x/api/index.html)
- [npm CLI](https://docs.npmjs.com/cli/v9)

## Local Development

Before you start, make sure you have completed the following steps:

```bash
# install dependencies
npm i
```

Then configure the required environment files as described below.

### Environment Files

- **strapi-cms**: copy `apps/strapi-cms/.env.example` to `apps/strapi-cms/.env` and set `DATABASE_CLIENT` to `sqlite` or `postgres`. If you use PostgreSQL, make sure a local PostgreSQL instance is running and that the target schema is empty, or has only been used by Strapi; then fill the variables under `#POSTGRESQL` in the example file.
- **nextjs-website**: copy `apps/nextjs-website/.env.example` to `apps/nextjs-website/.env` and set provider URLs and tokens, for example `DEMO_STRAPI_API_BASE_URL` and `DEMO_STRAPI_API_TOKEN`. Do not commit secrets; keep the `.env` file local and out of version control.
- Optional flags: `ENVIRONMENT`, `PREVIEW_MODE`, `PREVIEW_TOKEN`, `MOCK_BUILD`.

### Run The Project Locally

Run the following command from the root folder:

```bash
npm run dev
```

You can also run a single workspace:

```bash
npm run dev -w strapi-cms
npm run dev -w nextjs-website
```

Open [http://localhost:1337/admin/](http://localhost:1337/admin/) with your browser to access the CMS admin panel. You will be asked to create a user on first launch.

Open [http://localhost:3000](http://localhost:3000) with your browser to access the website.

### Build, Lint, And Test

Run the following commands from the root folder:

```bash
npm run compile
npm run lint
npm run test
```

## Commands Cheat Sheet

### Workspace

For more information, check the [npm CLI workspace documentation](https://docs.npmjs.com/cli/v9/using-npm/workspaces).

#### Run Commands

Run the chosen command in each workspace:

```bash
npm run <command> --workspaces
```

Run the chosen command on a specific workspace:

```bash
npm run <command> -w <workspace>
```

#### Manage Dependencies

Add a dependency to the root package:

```bash
npm i <dependency>
```

Add a dependency to a workspace as a development dependency:

```bash
npm i <dependency> -D -w <workspace>
```

## Changelog

This project uses [Changesets](https://github.com/changesets/changesets) to generate the changelog.

To add changelog information, run:

```bash
npx changeset
```

or:

```bash
npm run changeset
```

Then follow the wizard. Changesets will ask what kind of change was made (`major`, `minor`, or `patch`) and for a summary. The entered summary is what will be visible in the changelog.

The `.github/workflows/changelog.yaml` workflow uses the [Changesets action](https://github.com/changesets/action) to convert the changes tracked with `npm run changeset` into a `CHANGELOG.md` file. It then creates a PR with the proposed changes, including version bumps and updates to `CHANGELOG.md`. If more changes are added while that PR is open, the Changesets bot automatically updates it based on the `.changeset` folder.
