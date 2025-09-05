import { Link } from "react-router-dom";

const Hero = ({ hero }) => {
  return (
    <div className="bg-white py-16 ">
      <div className="border-l-16 border-amber-300 px-12">
        <p className="text-[40px] font-bold mb-6">{hero.title}</p>
        {hero.contents.map((content) => (
          <p className="text-sm font-light mb-4">{content.paragraph}</p>
        ))}
        <div className="pt-6">
          {hero.button.text && (
            <div className="primary-button w-fit">
              <Link to={hero.button.path}>{hero.button.text}</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
