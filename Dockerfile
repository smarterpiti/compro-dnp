FROM httpd:2.4.53-alpine

COPY ./dist/ /usr/local/apache2/htdocs