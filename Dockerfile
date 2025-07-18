# Dockerfile para Calculadora de IMC Angular 19
# Construye la app y la sirve con NGINX para producción

# Etapa 1: build de Angular
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: imagen de producción con NGINX
FROM nginx:alpine
COPY --from=build /app/dist/murillo-gabriel-ex2-imc/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
