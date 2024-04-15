FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
ARG ["nginx", "-g", "daemon off;"]