FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE 9898

cmd node server.js