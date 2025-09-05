import { Link } from "react-router-dom";

const Hero = ({ hero }) => {
  return (
    <div className="bg-white py-16 ">
      <div className="border-l-16 border-amber-300 px-12">
        <h1>{hero.title}</h1>
        {hero.contents.map((content) => (
          <p>{content.paragraph}</p>
        ))}
        {hero.button.text && (
          <div className="pt-6">
            <p className="primary-button w-fit">
              <Link to={hero.button.path}>{hero.button.text}</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
