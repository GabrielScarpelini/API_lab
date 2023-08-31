DROP DATABASE IF EXISTS `system`;

CREATE DATABASE `system`;

USE `system`;


CREATE TABLE `users`(
      `id` BIGINT NOT NULL AUTO_INCREMENT,
      `name` VARCHAR(45) NOT NULL,
      `email` VARCHAR(45) NOT NULL UNIQUE,
      `user_type_id` INTEGER NOT NULL,
      `password` VARCHAR(100) NOT NULL,
      `is_active` INTEGER NOT NULL,
      `cpf_cnpj` VARCHAR(14) NOT NULL,
      `phone` VARCHAR(14),
      PRIMARY KEY (id)
);

CREATE TABLE `user_type`(
      `id` BIGINT NOT NULL AUTO_INCREMENT,
      `type_name` VARCHAR(20) NOT NULL,
      `cod_type` INTEGER NOT NULL,
      PRIMARY KEY (id)
);

INSERT INTO `user_type`(type_name, cod_type) VALUES ("aluno", 1), ("professor", 2)
