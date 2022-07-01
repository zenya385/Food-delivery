const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catchErrors");

const { getShop, checkShop } = require("../../controllers/shops");

router.get("/", catchErrors(getShop));
// router.post("/check/:type", catchErrors(checkShop));

module.exports = router;
