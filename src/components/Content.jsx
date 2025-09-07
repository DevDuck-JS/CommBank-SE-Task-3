import ContentNavBar from "./ContentNavBar.jsx";
import Card from "./Card.jsx";
import ListContent from "./ListContent.jsx";
import EmergencyImage from "../assets/EmergencyImage.png";
import Hero from "../components/Hero.jsx";

import heroCyberSecurityTips from "../data/heroCyberSecurityTips.json";

const Content = () => {
  return (
    <>
      <div className="relative px-8 z-100">
        <div className="pt-20 w-1/2 ">
          {/* Hero */}
          {heroCyberSecurityTips.map((hero) => (
            <Hero key={hero.id} hero={hero} />
          ))}
        </div>

        {/* Content */}
        <ContentNavBar />

        {/* Financial security */}
        <div id="home-security" className="bg-white p-16 scroll-mt-20">
          <div>
            <h2 className=" mb-6">Test Update Workflow Script</h2>
            <h2 className=" mb-6">Financial Cybersecurity Tips</h2>
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
