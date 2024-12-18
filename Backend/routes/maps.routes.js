const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  getCoordinates,
  getSuggestions,
} = require("../controllers/map.controller");
const router = express();
const { query } = require("express-validator");
const { getDistanceTime } = require("../controllers/map.controller");

router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 1 }),
  authMiddleware.authUser,
  getCoordinates
);

router.get(
  "/get-distance",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  getDistanceTime
);

router.get(
  "/get-suggestions",
  query("input").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  getSuggestions
);

module.exports = router;
