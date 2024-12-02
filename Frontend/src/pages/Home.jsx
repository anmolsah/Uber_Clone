import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-screen pt-8 w-full bg-red-400 flex justify-between flex-col">
        <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl fonr-bold">Get Started with Uber</h2>
          <button className="w-full bg-black text-white py-3 rounded mt-5">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
