import { useState } from "react";
import Logo from "../assets/CommBankLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Navbar menu */}

      {showMobileMenu && (
        <div
          className={`flex items-center h-full w-full text-white bg-[#231F20] fixed top-0 z-[700] inset-0 transition-all duration-300 ease-linear ${
            showMobileMenu ? `translate-x-0` : `translate-x-full`
          }`}
        >
          <div className="w-full p-6 fixed top-0 ">
            {/* Close button */}
            <div className="text-end ">
              <FontAwesomeIcon
                icon="fa-solid fa-xmark"
                className="hover:cursor-pointer"
                onClick={() => setShowMobileMenu((previousState) => false)}
              />
            </div>
            {/* Top menu */}
            <ul>
              <li className="mobile-nav-item">
                <a href="https://www.commbank.com.au/banking.html?ei=mv_banking">
                  Banking
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="https://www.commbank.com.au/home-loans.html?ei=mv_home-loans">
                  Home Loan
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="https://www.commbank.com.au/insurance.html?ei=mv_insurance">
                  Insurance
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="https://www.commbank.com.au/investing-and-super.html?ei=mv_investing-super">
                  Investing & super
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="https://www.commbank.com.au/business.html?ei=mv_business">
                  Business
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="https://www.commbank.com.au/institutional.html?ei=mv_institutional">
                  Institutional
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="https://www.commbank.com.au/commbank-yello.html?ei=mv_cbyello">
                  CommBank Yello
                </a>
              </li>
            </ul>

            {/* Divider line */}
            <div className="bg-white h-0.25 mobile-nav-item"></div>
            {/* Bottom menu */}
            <ul>
              <li className="mobile-nav-item">
                <a href="https://www.commbank.com.au/digital/locate-us/?ei=mv_locate-us">
                  Locate us
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="https://www.commbank.com.au/support.html?ei=mv_support">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Navbar container */}
      <div className="flex w-full justify-between items-center top-0 shadow-sm bg-white">
        {/* Desktop */}
        <div className="hidden lg:flex justify-between items-center ">
          <img src={Logo} className="w-auto h-10 xl:ms-8 lg:ms-2.5" />
          <a
            href="https://www.commbank.com.au/banking.html?ei=mv_banking"
            className="nav-item"
          >
            Banking
          </a>
          <a
            href="https://www.commbank.com.au/home-loans.html?ei=mv_home-loans"
            className="nav-item"
          >
            Home Loan
          </a>
          <a
            href="https://www.commbank.com.au/insurance.html?ei=mv_insurance"
            className="nav-item"
          >
            Insurance
          </a>
          <a
            href="https://www.commbank.com.au/investing-and-super.html?ei=mv_investing-super"
            className="nav-item"
          >
            Investing & super
          </a>
          <a
            href="https://www.commbank.com.au/business.html?ei=mv_business"
            className="nav-item"
          >
            Business
          </a>
          <a
            href="https://www.commbank.com.au/institutional.html?ei=mv_institutional"
            className="nav-item"
          >
            Institutional
          </a>
          <a
            href="https://www.commbank.com.au/commbank-yello.html?ei=mv_cbyello"
            className="nav-item"
          >
            CommBank Yello
          </a>
        </div>
        {/* Mobile */}
        <div className="lg:hidden flex justify-between items-center">
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            className="ps-8 hover:cursor-pointer"
            onClick={() => setShowMobileMenu((showMobileMenu) => true)}
          />
          <img src={Logo} className="w-auto h-10 ps-8" />
        </div>
        {/* Search & Log on */}
        <div className="flex justify-end items-center h-20">
          <div className="flex px-7 border-l-1 border-gray-200 h-full items-center">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </div>
          <div className="flex bg-primary px-4 min-h-full items-center">
            <span>
              <FontAwesomeIcon icon="fa-solid fa-lock" />
            </span>
            <span className="font-bold ps-2">Log on</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
