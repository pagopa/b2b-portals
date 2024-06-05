FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./

FROM base as builder
WORKDIR /app
ARG ENVIRONMENT=demo
ENV ENVIRONMENT=${ENVIRONMENT}
ARG PREVIEW_MODE=true
ENV PREVIEW_MODE=${PREVIEW_MODE}
ARG PREVIEW_URL="https://preview.b2bportals.pagopa.it/preview"
ENV PREVIEW_URL=${PREVIEW_URL}
ARG STRAPI_API_TOKEN="b35f949f47029fbd20881eba759c051ec06feaf7759b69eb6b1ce3c8eb384179d0918290865f6003b6b72dd73851fb8528c197d0b739a95428fcdeb171c1e1f6f0dbf359c92e35c20c9cc3549bd8230ac0a082d12aef1f8eac4df96db7285793046a3a59285fdc1e845809567800fdd5b33f598f9ad85844a89dea7beda8ebb3"
ENV STRAPI_API_TOKEN=${STRAPI_API_TOKEN}
ARG PREVIEW_TOKEN="ELnNE]W#0?=}o(-="
ENV PREVIEW_TOKEN=${PREVIEW_TOKEN}
ARG STRAPI_API_BASE_URL="https://b2bportals.pagopa.it"
ENV STRAPI_API_BASE_URL=${STRAPI_API_BASE_URL}
COPY . .
RUN npm run build


FROM base as production
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD npm run start