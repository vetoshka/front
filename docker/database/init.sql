CREATE USER 'user_front'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user_front'@'localhost' WITH GRANT OPTION;
CREATE USER 'user_front'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user_front'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE database;

create table roles
(
    id int auto_increment primary key,
    name ENUM('CUSTOM', 'ADMIN')
);
create table users
(
    id       int auto_increment
        primary key,
    username varchar(30)  not null,
    password varchar(120) not null,
    email    varchar(40)  not null,
    role_id int not null,
    constraint users_email_uindex
        unique (email),
    constraint role_id
        foreign key (role_id) references roles (id)
);
create table products
(
    id       int auto_increment
        primary key,
    name varchar(80)  not null,
    price varchar(40)  not null,
    description varchar(500)
);