const express = require("express");
const authorize = require("../../middlewares/authorize");
const { addUserControl } = require("../../controllers/user");
const { catchErrors } = require("../../middlewares/catchErrors");

const router = express.Router();

router.post("/", catchErrors(addUserControl));

module.exports = router;
