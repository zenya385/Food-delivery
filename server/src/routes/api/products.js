const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../middlewares/catchErrors");

const { getProduct } = require("../../controllers/products");

router.get("/", catchErrors(getProduct));

module.exports = router;
