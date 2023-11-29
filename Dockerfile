
# docker build -t moja-aplikacja-react .



# Użyj obrazu node do zbudowania aplikacji
FROM node:alpine as build

# Ustaw katalog roboczy
WORKDIR /app

# Kopiuj pliki projektu
COPY . ./

# Zainstaluj zależności i zbuduj aplikację
RUN npm install
RUN npm run build

# Użyj obrazu nginx do serwowania aplikacji
FROM nginx:alpine

# Kopiuj zbudowaną aplikację do serwera nginx
COPY --from=build /app/build /usr/share/nginx/html

# Eksponuj port 80
EXPOSE 80

# Uruchom nginx
CMD ["nginx", "-g", "daemon off;"]

# kopiowanie defaultowej konfiguracji REACT
# COPY default.conf /etc/nginx/conf.d/default.conf
