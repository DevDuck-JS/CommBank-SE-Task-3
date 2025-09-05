import React from "react";
import ContentNavBar from "./ContentNavBar.jsx";
import Card from "./Card.jsx";
import ListContent from "./ListContent.jsx";
import EmergencyImage from "../assets/EmergencyImage.png";
import chatIcon from "../assets/chatIcon.svg";
import phoneIcon from "../assets/phoneIcon.svg";
import branchIcon from "../assets/branchIcon.svg";

const Content = () => {
  return (
    <>
      <div className="relative px-8 z-100">
        <div className="pt-20 w-1/2 ">
          {/* Header */}
          <div className="bg-white py-16 ">
            <div className="border-l-16 border-amber-300 px-12">
              <p className="text-[40px] font-bold mb-6">Cybesecurity Tips</p>
              <p className="text-sm font-light">
                Protecting your money online starts with smart habits. Strong
                passwords, alerts, and safe browsing go a long way toward
                keeping your accounts secure.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <ContentNavBar />

        {/* Financial security */}
        <div id="home-security" className="bg-white p-16 scroll-mt-20">
          <div>
            <p className="text-4xl font-bold mb-6">
              Financial Cybersecurity Tips
            </p>
            <Card />
          </div>
        </div>
        {/* Bottom divider */}
        <div className="px-16 bg-white">
          <div className="bg-gray-200 h-0.25"></div>
        </div>
        {/* In an emergency */}
        <div id="in-emergency" className="bg-white p-16 scroll-mt-20">
          <div className="flex flex-col-reverse">
            {/* Text - Row on XL */}

            <ListContent />

            <div className="w-full">
              <img
                src={EmergencyImage}
                alt=""
                className="z-400 lg:absolute right-0 w-full lg:w-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
