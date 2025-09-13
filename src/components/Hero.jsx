import Banner from "./Banner.jsx";
import heroCyberSecurityTips from "../data/heroCyberSecurityTips.json";
import BannerImage from "../components/BannerImage.jsx";

const Hero = () => {
  return (
    <div>
      <>
        {/* New  */}
        <div className="lg:relative">
          <div className="hero-banner-module">
            {/* Content Panel */}
            <div className="flex flex-col-reverse">
              <div className="w-full lg:w-1/2">
                {/* Hero */}
                {heroCyberSecurityTips.map((content) => (
                  <Banner key={content.id} content={content} />
                ))}
              </div>
            </div>
            {/* Banner Image */}
            <div className="absolute lg:w-[calc(12.5rem+50%)] lg:left-[45%] -left-[5%] lg:-top-20 top-20 -z-10">
              <BannerImage />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hero;
