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

ALTER TABLE project ADD COLUMN images VARCHAR(255);

UPDATE project
SET
    images = 'img projets portfolio/Wild Eats 1.png, img projets portfolio/Wild Eats 2.png, img projets portfolio/Wild Eats 3.png, img projets portfolio/Wild Eats 4.png, img projets portfolio/Wild Eats 5.png'
WHERE
    id = 1;

create TABLE project_skill (
    project_id int, skill_id int, FOREIGN KEY (project_id) REFERENCES project (id), FOREIGN KEY (skill_id) REFERENCES skill (id)
);

DROP TABLE project_skill;

INSERT INTO
    project_skill (project_id, skill_id)
VALUES (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 2),
    (2, 3),
    (2, 4),
    (3, 1),
    (3, 2),
    (3, 3),
    (3, 4),
    (3, 5),
    (3, 6),
    (4, 1),
    (4, 2),
    (4, 3),
    (4, 4),
    (4, 5),
    (4, 6);

create TABLE tool (
    id int PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100)
);

DROP TABLE tool;

INSERT INTO
    tool (name)
VALUES ('Trello'),
    ('GitHub'),
    ('Figma'),
    ('Postman'),
    ('DBeaver')

create TABLE hard_skill (
    id int PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100)
);

DROP TABLE tool;

INSERT INTO
    hard_skill (name)
VALUES ('HTML5'),
    ('CSS3'),
    ('JavaScript'),
    ('Node.JS'),
    ('React'),
    ('Express')

create TABLE formation (
    id int PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), description VARCHAR(255)
);

DROP TABLE tool;

INSERT INTO
    formation (name, description)
VALUES (
        'Wild Code School', "Ceci est une description de ma formation, avec le type de diplôme obtenue et ce que j'ai appris et les dates"
    )