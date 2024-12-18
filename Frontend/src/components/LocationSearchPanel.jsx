import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  //sample array locations
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.description);
    } else if (activeField === "destination") {
      setDestination(suggestion.description);
    }
    // setVehiclePanel(true);
    // setPanelOpen(false);
  };

  return (
    <div>
      {
      suggestions.map((ele, index) => (
        <div
          key={index}
          onClick={() => handleSuggestionClick(ele)}
          className="flex border-2 p-2 border-gray-100 active:border-black gap-4 rounded-xl items-center my-3 justify-start"
        >
          <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{ele.description}</h4>
        </div>
      ))
      }
    </div>
  );
};

export default LocationSearchPanel;

