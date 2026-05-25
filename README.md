# B2B Portals

This repository contains the applications and packages needed to work on the B2B Portals project.

## What Is In This Repository

This is an npm workspace monorepo. The main applications are:

- **`apps/strapi-cms`**: the Strapi CMS used to create and manage portal content.
- **`apps/nextjs-website`**: the Next.js website that reads content from Strapi and renders the public portal.

In local development, the usual flow is:

```text
PostgreSQL -> Strapi CMS -> Next.js website
```

Local URLs:

- CMS admin panel: [http://localhost:1337/admin/](http://localhost:1337/admin/)
- Website: [http://localhost:3000](http://localhost:3000)

## Requirements

- [Node.js](https://nodejs.org/docs/latest-v22.x/api/index.html)
- [npm CLI](https://docs.npmjs.com/cli/v9)
- A running PostgreSQL instance for Strapi

The repository defines the expected Node.js version in `.node-version`.

## Key Concepts

### CMS

The CMS is the admin application where content is created and managed. It runs with Strapi and exposes APIs consumed by the website.

### Website

The website is the frontend application. It runs with Next.js and displays the content fetched from Strapi.

During the build phase, Next.js generates static HTML files from the CMS content. In local development, the website actually serves and updates that content when you run `npm run dev -w nextjs-website`.

### Tenant And `ENVIRONMENT`

The website supports multiple portal configurations. The `ENVIRONMENT` variable selects which tenant configuration is used.

Example:

```env
ENVIRONMENT=demo
```

With `ENVIRONMENT=demo`, the website uses:

```env
DEMO_STRAPI_API_BASE_URL
DEMO_STRAPI_API_TOKEN
```

## Local Development Setup

### 1. Install Dependencies

From the repository root:

```bash
npm i
```

### 2. Configure Strapi CMS

Copy the Strapi environment file:

```bash
cp apps/strapi-cms/.env.example apps/strapi-cms/.env
```

Then fill the variables under `#POSTGRESQL` in the same file.

Make sure your local PostgreSQL instance is running. The configured schema does not need to exist in advance: if it is missing, Strapi will create it automatically.

### 3. Configure The Website

Copy the website environment file:

```bash
cp apps/nextjs-website/.env.example apps/nextjs-website/.env
```

For local development with the demo tenant, configure:

```env
ENVIRONMENT=demo
DEMO_STRAPI_API_BASE_URL=http://localhost:1337
DEMO_STRAPI_API_TOKEN=<generated-token>
```

The token is generated from the local Strapi admin panel after the first Strapi startup. See the next section.

Do not commit `.env` files or secrets.

## First Strapi Startup

Follow these steps the first time you start the CMS locally.

### 1. Start Strapi

From the repository root:

```bash
npm run dev -w strapi-cms
```

### 2. Log In For The First Time

Open:

```text
http://localhost:1337/admin/
```

Create the first admin user when prompted, then log in to the Strapi admin panel for the first time.

### 3. Restore View Configuration

Stop Strapi, then run `npm run configrestore` inside the `strapi-cms` folder:

```bash
cd apps/strapi-cms
npm run configrestore
cd ../..
```

This saves all Strapi view configurations (stored in `viewconfig.json`) into your local database.

### 4. Start Strapi Again

```bash
npm run dev -w strapi-cms
```

### 5. Create A Strapi API Token

Open:

```text\
http://localhost:1337/admin/
```

Then:

1. Go to `Settings`.
2. Open `API Tokens`.
3. Create a new token.
4. Copy the generated token.
5. Paste it into `apps/nextjs-website/.env`:

```env
DEMO_STRAPI_API_TOKEN=<generated-token>
```

The token is shown only once. If you lose it, create a new one.

## Run The Project Locally

You can start all dev tasks from the root folder:

```bash
npm run dev
```

For troubleshooting, it is often clearer to start each workspace separately:

```bash
npm run dev -w strapi-cms
npm run dev -w nextjs-website
```

Open:

- [http://localhost:1337/admin/](http://localhost:1337/admin/) for the CMS
- [http://localhost:3000](http://localhost:3000) for the website

The website will work with the local CMS when `apps/nextjs-website/.env` contains:

```env
ENVIRONMENT=demo
DEMO_STRAPI_API_BASE_URL=http://localhost:1337
DEMO_STRAPI_API_TOKEN=<generated-token>
```

## Build, Lint, And Test

Run the following commands from the root folder:

```bash
npm run compile
npm run lint
npm run test
npm run build:mock -w nextjs-website
```

## Commands Cheat Sheet

### Workspace Commands

Run a command in each workspace:

```bash
npm run <command> --workspaces
```

Run a command on a specific workspace:

```bash
npm run <command> -w <workspace>
```

Examples:

```bash
npm run dev -w strapi-cms
npm run dev -w nextjs-website
```

### Manage Dependencies

Add a dependency to the root package:

```bash
npm i <dependency>
```

Add a dependency to a workspace as a development dependency:

```bash
npm i <dependency> -D -w <workspace>
```

For more information, check the [npm CLI workspace documentation](https://docs.npmjs.com/cli/v9/using-npm/workspaces).

## Changelog

This project uses [Changesets](https://github.com/changesets/changesets) to generate the changelog.

To add changelog information, run:

```bash
npx changeset
```

Then follow the wizard. Changesets will ask what kind of change was made (`major`, `minor`, or `patch`) and for a summary. The entered summary is what will be visible in the changelog.

The `.github/workflows/changelog.yaml` workflow uses the [Changesets action](https://github.com/changesets/action) to convert the changes tracked in the `.changeset` folder into a `CHANGELOG.md` file. It then creates a PR with the proposed changes, including version bumps and updates to `CHANGELOG.md`. If more changes are added while that PR is open, the Changesets bot automatically updates it based on the `.changeset` folder.