import ContentNavBar from "./ContentNavBar.jsx";
import Card from "./Card.jsx";
import ListContent from "./ListContent.jsx";
import EmergencyImage from "../assets/EmergencyImage.png";

const Content = () => {
  return (
    <>
      <div className="relative z-100">
        {/* Content */}
        <ContentNavBar />

        {/* Financial security */}
        <div
          id="fin-security"
          className="bg-white p-16 scroll-mt-20 content-max-width "
        >
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
          <div className="flex flex-col-reverse relative">
            {/* Content */}
            <ListContent />

            {/* Image */}
            <div>
              <img
                src={EmergencyImage}
                alt=""
                className="w-full lg:absolute lg:w-[calc(12.5rem+50%)] left-[50%] top-0 z-400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
