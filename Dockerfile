FROM node:18-alpine
WORKDIR /app/popu-checker
RUN apk update

COPY package*.json ./
COPY . .

# アプリが3000ポートでリッスンすることをDockerに伝える
EXPOSE 3000

