FROM node:18-alpine
ARG ENVIRONMENT=demo
ENV ENVIRONMENT=${ENVIRONMENT}
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm run start