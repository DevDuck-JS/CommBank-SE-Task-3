import Banner from "./Banner.jsx";
import heroCyberSecurityTips from "../data/heroCyberSecurityTips.json";
import BannerImage from "../components/BannerImage.jsx";

const Hero = () => {
  return (
    <div>
      <>
        {/* New  */}
        <div className="banner relative">
          <div className="hero-banner-module">
            {/* Content Panel */}
            <div className="w-1/2 ">
              {/* Hero */}
              {heroCyberSecurityTips.map((content) => (
                <Banner key={content.id} content={content} />
              ))}
            </div>
            {/* Banner Image */}
            <div>
              <BannerImage />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hero;
