const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
  createEquipment,
  getAllEquipment,
  getEquipmentById,
  updateEquipment,
  deleteEquipment,
} = require("../controllers/equipmentController");

router.post("/", protect, admin, createEquipment);

router.put("/:id", protect, admin, updateEquipment);

router.delete("/:id", protect, admin, deleteEquipment);

router.get("/", getAllEquipment);

router.get("/:id", getEquipmentById);

module.exports = router;