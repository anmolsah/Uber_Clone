import React from "react";

const LocationSearchPanel = (props) => {
  //sample array locations
  const locations = [
    "24B, Near local's cafe, Gulma Road, Siliguri",
    "32A, Opposite Grand Mall, MG Road, Gangtok",
    "15C, Beside City Garden, Hill Cart Road, Darjeeling",
    "9D, Near Green Valley School, Sevoke Road, Siliguri",
    "45E, Close to Mountain View Hotel, Mall Road, Kalimpong",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          key={index}
          className="flex border-2 p-2 border-gray-100 active:border-black gap-4 rounded-xl items-center my-3 justify-start"
        >
          <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
