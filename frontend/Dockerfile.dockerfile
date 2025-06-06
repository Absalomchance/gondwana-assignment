FROM ubuntu:22.04

RUN apt update && \
    apt install -y apache2 php libapache2-mod-php curl nano && \
    apt clean

# Enable Apache mods
RUN a2enmod php7.4 && a2enmod rewrite

# Set document root
WORKDIR /var/www/html

# Expose port 80
EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
