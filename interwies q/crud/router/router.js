const express = require("express");
const mongoose = require("../db/connection")
const controller = require("../controller/controller")

const router = express.Router();

router.post("/insert",controller.insert)
router.get("/find",controller.find)
router.put("/update",controller.update)
router.delete("/delete",controller.delete)

module.exports = router;











