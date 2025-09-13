import Image from "../assets/BannerImage.png";

const BannerImage = () => {
  return (
    <div className="banner-image lg:w-[calc(12.5rem+50%)] w-full absolute left-[45%] -top-20 -z-10">
      <img src={Image} alt="" className="w-[110%_!important]" />
    </div>
  );
};

export default BannerImage;
