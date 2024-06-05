FROM node:18-alpine
ARG PREVIEW_MODE=true
ENV PREVIEW_MODE=${PREVIEW_MODE}
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm run start