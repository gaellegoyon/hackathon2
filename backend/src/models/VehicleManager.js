const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, vehicle_brand, autonomy,power,localisation,vehicle_type)
    VALUES(?,?,?,?,?,?)`,
      [
        vehicle.name,
        vehicle.vehicle_brand,
        vehicle.autonomy,
        vehicle.power,
        vehicle.localisation,
        vehicle.vehicle_type,
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `UPDATE ${this.table} SET name = ?, vehicle_brand = ?,
      autonomy = ?,power=?,localisation=?,vehicle_type=? WHERE id = ? `,
      [
        vehicle.name,
        vehicle.vehicle_brand,
        vehicle.autonomy,
        vehicle.power,
        vehicle.localisation,
        vehicle.vehicle_type,
        vehicle.id,
      ]
    );
  }
}

module.exports = VehicleManager;
