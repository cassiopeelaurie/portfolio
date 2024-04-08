-- Active: 1699869369987@@127.0.0.1@3306
CREATE DATABASE portfolio DEFAULT CHARACTER SET = 'utf8mb4';

USE portfolio;

CREATE TABLE skill (
    id int PRIMARY KEY AUTO_INCREMENT, skills VARCHAR(100)
);

DROP TABLE skill;

INSERT INTO
    skill (skills)
VALUES ('html'),
    ('css'),
    ('javascript'),
    ('react'),
    ('node.js'),
    ('express');

CREATE TABLE project (
    id int PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), description VARCHAR(255)
);

DROP TABLE project;

INSERT INTO
    project (name, description)
VALUES (
        'Wild Eats', 'Première description de projet'
    ),
    (
        'GreenPoint', 'Deuxième description de projet'
    ),
    (
        'Tech Care', 'Troisième description de projet'
    ),
    (
        'Externatic', 'Quatrième description de projet'
    );

create TABLE project_skill