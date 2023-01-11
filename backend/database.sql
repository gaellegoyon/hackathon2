/* On desactive la verification des clés étrangères*/
SET foreign_key_checks = 0;

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `hashedPassword` VARCHAR(250) NOT NULL,
  `is_admin` VARCHAR(45) NULL,
  `is_supplier` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `vehicle`;
CREATE TABLE IF NOT EXISTS `vehicle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `vehicle_brand` VARCHAR(45) NOT NULL,
  `autonomy` VARCHAR(45) NOT NULL,
  `power` VARCHAR(45) NOT NULL,
  `localisation` VARCHAR(45) NOT NULL,
  `image` VARCHAR(200) NULL,
  `vehicle_type` VARCHAR(45) NOT NULL,
  `vehicle_category` VARCHAR(45) NULL,
  `vehicle_km` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS `rental`;
CREATE TABLE IF NOT EXISTS `rental` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rental_date` DATE NULL,
  `rental_time` TIMESTAMP NULL,
  `rental_status` VARCHAR(45) NULL,
  `return_date` DATE NULL,
  `user_id` INT NOT NULL,
  `vehicle_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_rental_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`),
  CONSTRAINT `fk_rental_vehicle1`
    FOREIGN KEY (`vehicle_id`)
    REFERENCES `mydb`.`vehicle` (`id`))
ENGINE = InnoDB;

/* On reactive la verification des clés étrangères*/
SET foreign_key_checks = 1;
