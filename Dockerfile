# 1. Base del sistema: Servidor web Nginx ligero
FROM nginx:alpine

# 2. Copia los archivos estáticos de la aplicación a la carpeta de Nginx
COPY . /usr/share/nginx/html

# 3. Informa que la aplicación escuchará en el puerto 80
EXPOSE 80