FROM mysql/mysql-server:8.0
ENV MYSQL_ROOT_PASSWORD root 
ENV MYSQL_DATABASE database 
ENV MYSQL_ROOT_HOST 127.0.0.1
ADD init.sql /docker-entrypoint-initdb.d/
EXPOSE 3306