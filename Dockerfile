FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
FROM nginx:1.23
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
