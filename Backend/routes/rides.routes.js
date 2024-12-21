const express = require("express");
const router = express.Router();
const { body, query } = require("express-validator");
const {
  createRide,
  getFareController,
  confirmRide,
} = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/create",
  authMiddleware.authUser,
  body("pickup").isString().isLength({ min: 3 }).withMessage("Invalid pickup"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination"),
  body("vehicleType")
    .isString()
    .isIn(["auto", "car", "motorcycle"])
    .withMessage("Invalid vehicle type"),
  createRide
);

router.get(
  "/get-fare",
  authMiddleware.authUser,
  query("pickup").isString().isLength({ min: 3 }).withMessage("Invalid pickup"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination"),
  getFareController
);

router.post(
  "/confirm",
  authMiddleware.authCaptain,
  body("rideId").isMongoId().withMessage("Invalid ride id"),
  confirmRide
);
module.exports = router;
