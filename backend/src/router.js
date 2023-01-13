const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: process.env.AVATAR_DIRECTORY });
const uploads = multer({ dest: process.env.VEHICLE_DIRECTORY });

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const vehicleControllers = require("./controllers/vehicleControllers");
const userControllers = require("./controllers/userControllers");
const fileControllers = require("./controllers/fileControllers");
const vehicleFileControllers = require("./controllers/vehicleFileControllers");

// Auth
router.post("/api/register", hashPassword, userControllers.add);
router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des vehicle
router.get("/api/vehicles/all", vehicleControllers.browse);
router.get("/api/vehicles/:id", vehicleControllers.read);
router.post("/api/vehicles/", verifyToken, vehicleControllers.addVehicle);
router.put("/api/vehicles/:id", verifyToken, vehicleControllers.edit);
router.delete("/api/vehicles/:id", verifyToken, vehicleControllers.destroy);

// Gestion des users
router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, verifyToken, userControllers.add);
router.put("/api/users/:id", verifyToken, userControllers.edit);
router.delete("/api/users/:id", verifyToken, userControllers.destroy);

// Gestion des avatars
router.post(
  "/api/avatars",
  verifyToken,
  upload.single("avatar"),
  fileControllers.renameAvatar,
  userControllers.updateAvatar
);
router.get("/api/avatars/:fileName", fileControllers.sendAvatar);

// Gestion des vehicles
router.post(
  "/api/vehicles/image",
  verifyToken,
  uploads.single("vehicle"),
  vehicleFileControllers.renameVehicle,
  vehicleFileControllers.sendVehicle,
  vehicleControllers.addVehicle
);
router.get("/api/vehicles/:fileName", vehicleFileControllers.sendVehicle);

module.exports = router;
