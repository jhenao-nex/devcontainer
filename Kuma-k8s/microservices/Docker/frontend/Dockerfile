# Usa una imagen base de Node.js para el build
FROM node:14 as build

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Construye la aplicación
RUN npm run build

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos al contenedor de Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]