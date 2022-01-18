FROM apache:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run build
EXPOSE 8080