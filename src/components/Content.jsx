import React from "react";
import ContentNavBar from "./ContentNavBar.jsx";
import Card from "./Card.jsx";
import ListContent from "./ListContent.jsx";
import EmergencyImage from "../assets/EmergencyImage.png";

const Content = () => {
  return (
    <>
      <div className="relative px-8 z-100">
        <div className="pt-20 w-1/2 ">
          {/* Header */}
          <div className="bg-white py-16 ">
            <div className="border-l-16 border-amber-300 px-12">
              <p className="text-[40px] font-bold mb-6">Cybesecurity Tips</p>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, nobis. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Tempore, nobis.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <ContentNavBar />

        {/* Home security */}
        <div id="home-security" className="bg-white p-16 scroll-mt-20">
          <div>
            <p className="text-4xl font-bold mb-6">Stay safe at home</p>
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
            {/* <div className="pt-16 pe-16 w-full lg:w-1/2">
              <p className="text-4xl font-bold mb-10">In an emergency</p>
              <div className="ps-5 mb-4">
                <ul className="list-disc font-light space-y-2">
                  <li>
                    <span className="font-bold">
                      Disconnect from the internet immediately{" "}
                    </span>
                    if you suspect your computer or phone has been hacked. This
                    prevents further unauthorized access or data theft.
                  </li>
                  <li>
                    <span className="font-bold">Change your passwords </span>{" "}
                    for any accounts that might have been compromised. Use
                    strong, unique passwords and enable two-factor
                    authentication where possible.
                  </li>
                  <li>
                    <span className="font-bold">
                      Contact your bank or service provider{" "}
                    </span>
                    if you notice suspicious activity on your accounts. They can
                    lock access, investigate transactions, and help you recover
                    funds.
                  </li>
                  <li>
                    <span className="font-bold">Report the incident </span> to
                    the Australian Cyber Security Centre (ACSC) via ReportCyber
                    so authorities can investigate and prevent further attacks.
                  </li>
                  <li>
                    <span className="font-bold">
                      Run a full antivirus scan{" "}
                    </span>
                    on all devices to remove malware or spyware that may have
                    been installed during the breach.
                  </li>
                </ul>
              </div>
            </div> */}
            {/* Image - Row on XL */}
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
