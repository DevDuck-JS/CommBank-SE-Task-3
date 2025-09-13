import Image from "../assets/BannerImage.png";

const BannerImage = () => {
  return (
    <div className="">
      <img src={Image} alt="banner image" className="w-[110%]" />
    </div>
  );
};

export default BannerImage;
