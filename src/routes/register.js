const express = require("express");
const registernController = require("../app/controller/RegisterController");
const router = express.Router();

router.get("/create", registernController.create);
router.post("/storeRegister", registernController.storeRegister);
module.exports = router;
