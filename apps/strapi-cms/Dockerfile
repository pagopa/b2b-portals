# node:18.17-alpine3.17
FROM node:18-alpine@sha256:667b1cc7a038a4bbfeb9852e1bfe9bd956e10215092b076d968c62a673d5b773 as base

# Install turbo and create a pruned version of the monorepo inside an ./out directory.
# It only includes workspaces which strapi-cms depends on.
FROM base AS builder
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
# Set working directory
WORKDIR /opt
RUN npm i -g turbo
COPY . .
RUN turbo prune strapi-cms --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /opt
# Install the dependencies (production only)
COPY .gitignore .gitignore
COPY --from=builder /opt/out/json/ .
COPY --from=builder /opt/out/package-lock.json ./package-lock.json
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm i --ignore-scripts

# Build strapi-cms application
COPY --from=builder /opt/out/full/ .
RUN npm run build -w strapi-cms

FROM base AS runner
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY --from=installer /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=installer /opt ./
ENV PATH /opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD npm run start -w strapi-cms
