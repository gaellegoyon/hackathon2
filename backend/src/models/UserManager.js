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
      `select id, firstname, lastname, email, avatar from  ${this.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword) values (?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.hashedPassword]
    );
  }

  update(user) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      user,
      user.id,
    ]);
  }

  updateAvatar(id, avatar) {
    return this.connection.query(
      `update ${this.table} set avatar = ? where id = ?`,
      [avatar, id]
    );
  }

  sendMessage(id) {
    return this.connection.query(
      `select message, from  ${this.table} where id = ?`,
      [id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = UserManager;
