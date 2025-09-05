import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import heroMaintenance from "../data/heroMaintenance.json";

export default function UnderMaintenance() {
  return (
    <>
      <div className="relative px-8 z-100">
        <div className="w-full">
          {heroMaintenance.map((hero) => (
            <Hero key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
}
