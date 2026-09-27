drop database if exists usuarios_roles;
create database usuarios_roles;

\c usuarios_roles

create table user_account(id serial primary key,
username varchar(50) not null unique,
password varchar(255) not null,
role varchar(20) not null default 'USER' check (role in ('ADMIN', 'USER')));

-- contraseña de todos: "password" (hash BCrypt)
insert into user_account(username, password, role) values
('jesus', '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', 'USER'),
('emmanuel', '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', 'USER'),
('angel', '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', 'USER'),
('luis', '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', 'USER'),
('andrik', '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', 'ADMIN');

select * from user_account;
