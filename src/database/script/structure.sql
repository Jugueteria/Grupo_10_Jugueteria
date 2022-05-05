-- MySQL Script generated by MySQL Workbench
-- Thu May  5 17:04:27 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Proyecto
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Proyecto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Proyecto` DEFAULT CHARACTER SET utf8 ;
USE `Proyecto` ;

-- -----------------------------------------------------
-- Table `Proyecto`.`user_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto`.`user_category` (
  `Ucategory_id` INT NOT NULL AUTO_INCREMENT,
  `Ucategory_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`Ucategory_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `image` VARCHAR(100) NULL,
  `password` VARCHAR(20) NOT NULL,
  `Ucategory_id` INT NOT NULL,
  PRIMARY KEY (`user_id`),
  INDEX `Ucategory_id_idx` (`Ucategory_id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `Ucategory_id`
    FOREIGN KEY (`Ucategory_id`)
    REFERENCES `Proyecto`.`user_category` (`Ucategory_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto`.`trademark`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto`.`trademark` (
  `trademark_id` INT NOT NULL AUTO_INCREMENT,
  `trademark_name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`trademark_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto`.`product_category` (
  `Pcategory_id` INT NOT NULL AUTO_INCREMENT,
  `Pcategory_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`Pcategory_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto`.`products` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `price` FLOAT NOT NULL,
  `image` VARCHAR(100) NULL,
  `trademark_id` INT NOT NULL,
  `Pcategory_id` INT NOT NULL,
  PRIMARY KEY (`product_id`),
  INDEX `trademark_id_idx` (`trademark_id` ASC) VISIBLE,
  INDEX `Pcategory_id_idx` (`Pcategory_id` ASC) VISIBLE,
  CONSTRAINT `trademark_id`
    FOREIGN KEY (`trademark_id`)
    REFERENCES `Proyecto`.`trademark` (`trademark_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Pcategory_id`
    FOREIGN KEY (`Pcategory_id`)
    REFERENCES `Proyecto`.`product_category` (`Pcategory_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto`.`shopping_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto`.`shopping_cart` (
  `cart_id` INT NOT NULL AUTO_INCREMENT,
  `total_products` INT NOT NULL,
  `total_price` FLOAT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`cart_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `Proyecto`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto`.`cart_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto`.`cart_detail` (
  `detail_id` INT NOT NULL AUTO_INCREMENT,
  `products_name` VARCHAR(60) NOT NULL,
  `product_id` INT NOT NULL,
  `cart_id` INT NOT NULL,
  PRIMARY KEY (`detail_id`),
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  INDEX `cart_id_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `Proyecto`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cart_id`
    FOREIGN KEY (`cart_id`)
    REFERENCES `Proyecto`.`shopping_cart` (`cart_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
