const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service");
const { sendMessageToSocket } = require("../socket");
const rideModel = require("../models/ride.model");

module.exports.createRide = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { userId, pickup, destination, vehicleType } = req.body;
  console.log(req.body);
  try {
    const ride = await rideService.createRideService({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(201).json(ride);

    const pickupCoordinates = await mapService.getAddressCoordinate(pickup);

    const captainsInRadius = await mapService.getCaptainInRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
      2
    );

    ride.otp = "";

    const rideWithUser = await rideModel
      .findOne({ _id: ride._id })
      .populate("user");

    captainsInRadius.map((captain) => {
      sendMessageToSocket(captain.socketId, {
        event: "new-ride",
        data: rideWithUser,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating ride" });
  }
};

module.exports.getFareController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination } = req.query;
  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (error) {
    res.status(500).json({ message: "Error creating ride" });
  }
};

module.exports.confirmRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { rideId } = req.body;
  try {
    const ride = await rideService.confirmRideService({
      rideId,
      captain: req.captain,
    });

    sendMessageToSocket(ride.user.socketId, {
      event: "ride-confirmed",
      data: ride,
    });
    return res.status(200).json(ride);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating ride" });
  }
};
