import { Link } from "react-router-dom";

const Banner = ({ content }) => {
  return (
    <div className="banner-content-panel">
      <div className="banner-content">
        <h1>{content.title}</h1>
        {content.contents.map((content) => (
          <p>{content.paragraph}</p>
        ))}
        {content.button.text && (
          <div className="pt-6">
            <p className="primary-button w-fit">
              <Link to={content.button.path}>{content.button.text}</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
