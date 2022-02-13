CREATE USER 'user_front'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user_front'@'localhost' WITH GRANT OPTION;
CREATE USER 'user_front'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user_front'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE database;