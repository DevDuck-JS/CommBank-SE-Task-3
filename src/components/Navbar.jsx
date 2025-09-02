import React from "react";
import Logo from "../assets/CommBankLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center shadow-sm bg-white">
      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center ">
        <img src={Logo} className="w-auto h-10 xl:ms-8 lg:ms-2.5" />
        <div className="nav-item">Banking</div>
        <div className="nav-item">Home Loan</div>
        <div className="nav-item">Insurance</div>
        <div className="nav-item">Investing & super</div>
        <div className="nav-item">Business</div>
        <div className="nav-item">Institutional</div>
        <div className="nav-item">CommBank Yello</div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex justify-between items-center ">
        <FontAwesomeIcon icon="fa-solid fa-bars" className="ps-8" />
        <img src={Logo} className="w-auto h-10 ps-8" />
      </div>
      {/* Search & Log on */}
      <div className="flex justify-end items-center h-20">
        <div className="flex px-7 border-l-1 border-gray-200 h-full items-center">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
        <div className="flex bg-[#FFCC00] px-4 min-h-full items-center">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-lock" />
          </span>
          <span className="font-bold ps-2">Log on</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
