import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-3-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="object-cover h-full w-full"
          src="https://s2-g1.glbimg.com/XqSOPkGsevCRrZxUsM_03g7M-vI=/0x0:445x569/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/o/X/Jlf0RqTsmrcHU6ZBRkqA/teste-99.png"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Anmol</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">WB04 BC 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suziki Alto</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between items-center flex-col">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-4-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Jheel Park, Kolkata
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹193.56</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
