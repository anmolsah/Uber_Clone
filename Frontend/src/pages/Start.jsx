import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-[url(https://media.istockphoto.com/id/1438911064/vector/tired-man-driving-city-traffic-jam-at-evening-after-work-day-sleepy-driver-in-car-on-road.jpg?s=612x612&w=0&k=20&c=N2Nr0bV0RluHOB_NaWxfPive1S8FywdMYNNTVW780ew=)] h-screen pt-8 w-full bg-red-400 flex justify-between flex-col">
        <img
          className="w-20 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold text-center">Get Started with Uber</h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
