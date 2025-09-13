import { Link } from "react-router-dom";

const ContentNavBar = () => {
  return (
    <div className="flex bg-white h-20 justify-between shadow-sm px-8 sticky top-0 z-500 content-max-width">
      <div className="hidden lg:flex justify-between items-center">
        <a href="#fin-security" className="nav-item">
          Financial security
        </a>
        <a href="#in-emergency" className="nav-item">
          In an emergency
        </a>
      </div>

      {/* Button */}
      <div className="flex px-4 items-center">
        <Link to="/maintenance" className="primary-button">
          Test your cybersecurity awareness
        </Link>
      </div>
    </div>
  );
};

export default ContentNavBar;
