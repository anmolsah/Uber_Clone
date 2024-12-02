import React from "react";

const UserLogin = () => {
  return (
    <div className="p-7">
     <div>
     <img
        className="w-16 mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
      />
      <form>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
          type="email"
          placeholder="email@example.com"
          required
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          placeholder="password"
          required
        />
        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base">
          Login
        </button>
      </form>
     </div>
     <div>
        <button>Create</button>
     </div>
    </div>
  );
};

export default UserLogin;
