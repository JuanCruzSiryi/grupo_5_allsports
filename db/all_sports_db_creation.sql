/* Primero crear base de datos */
/* CREATE DATABASE all_sports; */
/* USE all_sports; */

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `firstName` VARCHAR(50) NOT NULL,
   `lastName` VARCHAR(50) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `image` VARCHAR(150),
   `role_id` INT NOT NULL,
   `address` TEXT,
   `country_id` INT,
   `state` TINYINT DEFAULT 1,
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `description` TEXT,
   `brand_id` INT,
   `category_id` INT,
   `tag_id` INT,
   `color_id` INT,
   `image` VARCHAR(150),
   `price` INT,
   `size_id` INT,
   `discount` DECIMAL(3,1) DEFAULT 0,
   `state` TINYINT DEFAULT 1,
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brands` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_user` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `product_id` INT NOT NULL,
   `user_id` INT NOT NULL,
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sizes` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `cm` DECIMAL(3,1) NOT NULL,
   `eur` DECIMAL(3,1),
   `uk` DECIMAL(3,1),
   `us` DECIMAL(3,1),
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colors` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE `countries` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE `tags` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deletedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_c735ab5f-467a-4a14-9ff5-190b1b2649e2` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`)  ;

ALTER TABLE `users` ADD CONSTRAINT `FK_f52835f9-d78b-41fa-b22a-29cd404f62b9` FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_b705fff6-eda2-4f83-9c5b-2931999cfffe` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_c3c8a75a-d633-46e4-b515-21d50d052032` FOREIGN KEY (`brand_id`) REFERENCES `brands`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_593e831b-0e61-448d-88a9-7174d7caea6d` FOREIGN KEY (`size_id`) REFERENCES `sizes`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_a506842c-6bcb-4512-8817-12620221896c` FOREIGN KEY (`color_id`) REFERENCES `colors`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_03f4b471-7323-4cb6-9ba7-17ef3b6325d0` FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`)  ;

ALTER TABLE `product_user` ADD CONSTRAINT `FK_298218ef-b3e1-443f-a884-dcdec048a91f` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `product_user` ADD CONSTRAINT `FK_7d9c050e-4563-4108-8b3c-b564970046de` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

