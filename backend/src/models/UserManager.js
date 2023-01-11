const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, email, is_admin, is_supplier, from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, email, city, language, avatar from  ${this.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, is_admin, is_supplier, hashedPassword) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.is_admin,
        user.is_supplier,
        user.hashedPassword,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, is_admin, is_supplier, hashedPassword = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.is_admin,
        user.is_supplier,
        user.hashedPassword,
        user.id,
      ]
    );
  }

  updateAvatar(id, avatar) {
    return this.connection.query(
      `update ${this.table} set avatar = ? where id = ?`,
      [avatar, id]
    );
  }
}

module.exports = UserManager;
