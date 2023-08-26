DROP DATABASE IF EXISTS 'teste';

CREATE DATABASE 'teste';

USE 'teste';


CREATE TABLE `users`(
      `id` BIGINT NOT NULL AUTO_INCREMENT,
      `name` VARCHAR(45) NOT NULL,
      `email` VARCHAR(45) NOT NULL,
      `user_type_id` VARCHAR(45) NOT NULL,
      `password` INTEGER NOT NULL,
      `is_active` INTEGER NOT NULL,
      `cpf_cnpj` VARCHAR(14) NOT NULL,
      `phone` VARCHAR(14)
      PRIMARY KEY (id)
);

CREATE TABLE `user_type`(
      `id` INTEGER,
      `name` VARCHAR(25)
);

INSERT INTO `user_type`(id, name) VALUES (1, "aluno"), (2, "professor");

