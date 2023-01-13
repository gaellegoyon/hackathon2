const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const vehicleDirectory = process.env.VEHICLE_DIRECTORY || "public/";

const renameVehicle = (req, res, next) => {
  // TODO : gérer les erreurs
  // On récupère le nom du fichier
  const { originalname } = req.file;

  // On récupère le nom du fichier
  const { filename } = req.file;

  // On utilise la fonction rename de fs pour renommer le fichier
  const uuid = uuidv4();
  fs.rename(
    `${vehicleDirectory}${filename}`,
    `${vehicleDirectory}${uuid}-${originalname}`,
    (err) => {
      if (err) throw err;
      req.vehicle = `${uuid}-${originalname}`;
      next();
    }
  );
};

const sendVehicle = (req, res) => {
  const { filename } = req.vehicle;

  res.sendFile(vehicleDirectory + filename, filename, (err) => {
    if (err) {
      res.status(404).send({
        message: `Vehicle not found.`,
      });
    }
  });
};

module.exports = { renameVehicle, sendVehicle };
