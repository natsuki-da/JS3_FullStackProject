-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema CRUD_DB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema CRUD_DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `CRUD_DB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `CRUD_DB` ;

-- -----------------------------------------------------
-- Table `CRUD_DB`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CRUD_DB`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `projectName` VARCHAR(200) NOT NULL,
  `projectDescription` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 80
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `CRUD_DB`.`Skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CRUD_DB`.`Skill` (
  `idSkill` INT NOT NULL AUTO_INCREMENT,
  `skill` VARCHAR(100) NOT NULL,
  `projectId` INT NOT NULL,
  PRIMARY KEY (`idSkill`),
  INDEX `id_idx` (`projectId` ASC) VISIBLE,
  CONSTRAINT `id`
    FOREIGN KEY (`projectId`)
    REFERENCES `CRUD_DB`.`project` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 73
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
