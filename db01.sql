CREATE DATABASE IF NOT EXISTS dbpit;
USE dbpit;
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);
INSERT INTO usuarios (username, email, password) VALUES 
    ('usuario1', 'usuario1@example.com', '$2b$10$DhA4u9SvUpbUAFYXOjq18OtHAvF71kMm8Ww.xz3dR1sH8C9vWmPyK'); 
SELECT * FROM usuarios;