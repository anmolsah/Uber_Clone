const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and Destination are required");
  }
  const distanceTime = await mapService.getDistanceTimeCoordinates(
    pickup,
    destination
  );

  const baseFare = {
    auto: 30,
    motorcycle: 20,
    car: 50,
  };
  const farePerKm = {
    auto: 7,
    car: 10,
    motorcycle: 5,
  };

  const perMinuteFare = {
    auto: 2,
    car: 3,
    motorcycle: 1.5,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * farePerKm.auto +
        (distanceTime.duration.value / 60) * perMinuteFare.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * farePerKm.car +
        (distanceTime.duration.value / 60) * perMinuteFare.car
    ),
    motorcycle: Math.round(
      baseFare.motorcycle +
        (distanceTime.distance.value / 1000) * farePerKm.motorcycle +
        (distanceTime.duration.value / 60) * perMinuteFare.motorcycle
    ),
  };

  return fare;
}

module.exports.getFare = getFare;

function getOtp(num) {
  function generateOtp(num) {
    const otp = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();
    return otp;
  }
  return generateOtp(num);
}
module.exports.createRideService = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("Please provide all required fields");
  }
  const fare = await getFare(pickup, destination);
  const ride = rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(6),
    fare: fare[vehicleType],
  });
  return ride;
};
