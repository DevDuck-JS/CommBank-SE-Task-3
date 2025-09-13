import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import heroMaintenance from "../data/heroMaintenance.json";

export default function UnderMaintenance() {
  return (
    <>
      <div className="relative content-max-width px-8 z-100">
        <div className="">
          {heroMaintenance.map((content) => (
            <Banner key={content.id} content={content} />
          ))}
        </div>
      </div>
    </>
  );
}
