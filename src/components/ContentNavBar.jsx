import React from "react";

const ContentNavBar = () => {
  return (
    <div className="flex bg-white h-20 justify-between border-2 border-gray-100 px-8 sticky top-0 z-500">
      <div className="hidden lg:flex justify-between items-center">
        <a href="#home-security" className="nav-item">
          Home security
        </a>
        <a href="#home-security" className="nav-item">
          Travel security
        </a>
        <a href="#in-emergency" className="nav-item">
          In an emergency
        </a>
        {/* <div className="nav-item">Tool & support</div> */}
      </div>

      {/* Search & Log on */}
      <div className="flex px-4 items-center ">
        <div className="flex items-center px-8 bg-[#FFCC00] h-12 rounded-4xl font-light">
          Test your cybersecurity awareness
        </div>
      </div>
    </div>
  );
};

export default ContentNavBar;
