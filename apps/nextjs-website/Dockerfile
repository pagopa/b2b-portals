FROM node:18-alpine
RUN apk add --no-cache g++ make py3-pip libc6-compat
ARG ENVIRONMENT
ENV ENVIRONMENT=${ENVIRONMENT}
ARG PREVIEW_MODE
ENV PREVIEW_MODE=${PREVIEW_MODE}
ARG PREVIEW_TOKEN
ENV PREVIEW_TOKEN=${PREVIEW_TOKEN}
ARG SEND_STRAPI_API_TOKEN
ENV SEND_STRAPI_API_TOKEN=${SEND_STRAPI_API_TOKEN}
ARG SEND_STRAPI_API_BASE_URL
ENV SEND_STRAPI_API_BASE_URL=${SEND_STRAPI_API_BASE_URL}
ARG APPIO_STRAPI_API_TOKEN
ENV APPIO_STRAPI_API_TOKEN=${APPIO_STRAPI_API_TOKEN}
ARG APPIO_STRAPI_API_BASE_URL
ENV APPIO_STRAPI_API_BASE_URL=${APPIO_STRAPI_API_BASE_URL}
ARG DEMO_STRAPI_API_TOKEN
ENV DEMO_STRAPI_API_TOKEN=${DEMO_STRAPI_API_TOKEN}
ARG DEMO_STRAPI_API_BASE_URL
ENV DEMO_STRAPI_API_BASE_URL=${DEMO_STRAPI_API_BASE_URL}
ARG INTEROP_STRAPI_API_TOKEN
ENV INTEROP_STRAPI_API_TOKEN=${INTEROP_STRAPI_API_TOKEN}
ARG INTEROP_STRAPI_API_BASE_URL
ENV INTEROP_STRAPI_API_BASE_URL=${INTEROP_STRAPI_API_BASE_URL}
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm run start