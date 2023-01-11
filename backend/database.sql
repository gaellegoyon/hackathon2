/* On desactive la verification des clés étrangères*/
SET foreign_key_checks = 0;

CREATE TABLE IF NOT EXISTS user (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `hashedPassword` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(45) NOT NULL,
  `is_admin` VARCHAR(45) NULL,
  `is_supplier` VARCHAR(45) NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS vehicle (
  `idvehicle` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `vehicle_brand` VARCHAR(45) NOT NULL,
  `autonomy` VARCHAR(45) NOT NULL,
  `power` VARCHAR(45) NOT NULL,
  `localisation` VARCHAR(45) NOT NULL,
  `image` VARCHAR(100) NULL,
  `vehicle_type` VARCHAR(45) NOT NULL,
  `vehicle_category` VARCHAR(45) NULL,
  `vehicle_km` VARCHAR(45) NULL,
  PRIMARY KEY (`idvehicle`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS rental (
  `idrental` INT NOT NULL AUTO_INCREMENT,
  `rental_date` DATE NULL,
  `rental_time` TIMESTAMP NULL,
  `rental_status` VARCHAR(45) NULL,
  `return_date` DATE NULL,
  `user_iduser` INT NOT NULL,
  `vehicle_idvehicle` INT NOT NULL,
  PRIMARY KEY (`idrental`),
  INDEX `fk_rental_user_idx` (`user_iduser` ASC) VISIBLE,
  INDEX `fk_rental_vehicle1_idx` (`vehicle_idvehicle` ASC) VISIBLE,
  CONSTRAINT `fk_rental_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `mydb`.`user` (`iduser`)
  CONSTRAINT `fk_rental_vehicle1`
    FOREIGN KEY (`vehicle_idvehicle`)
    REFERENCES `mydb`.`vehicle` (`idvehicle`)
ENGINE = InnoDB;

/* On reactive la verification des clés étrangères*/
SET foreign_key_checks = 1;
