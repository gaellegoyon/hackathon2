const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, vehicle_brand, autonomy, power, image, vehicle_type, seat, numero, rue, cp, ville)
    VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
      [
        vehicle.name,
        vehicle.vehicle_brand,
        vehicle.autonomy,
        vehicle.power,
        vehicle.image,
        vehicle.vehicle_type,
        vehicle.seat,
        vehicle.numero,
        vehicle.rue,
        vehicle.cp,
        vehicle.ville,
        
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `UPDATE ${this.table} SET name = ?, vehicle_brand = ?,
      autonomy = ?,power=?,vehicle_type=?,image=?, numero=?, rue=?, cp=?, ville=? WHERE id = ? `,
      [
        vehicle.name,
        vehicle.vehicle_brand,
        vehicle.autonomy,
        vehicle.power,
        vehicle.vehicle_type,
        vehicle.id,
        vehicle.image,
        vehicle.numero,
        vehicle.rue,
        vehicle.cp,
        vehicle.ville,
      ]
    );
  }
}

module.exports = VehicleManager;
