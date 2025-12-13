const express = require("express");
const router = express.Router();
const cyclistController = require("../controllers/cyclistController");

router.get("/", cyclistController.getAllCyclists);
router.get("/:id", cyclistController.getCyclistById);
router.post("/", cyclistController.createCyclist);
router.put("/:id", cyclistController.updateCyclist);
router.delete("/:id", cyclistController.deleteCyclist);

module.exports = router;
