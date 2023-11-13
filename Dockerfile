FROM node:18-alpine
WORKDIR /app
RUN apk update

COPY package*.json ./
COPY . .
