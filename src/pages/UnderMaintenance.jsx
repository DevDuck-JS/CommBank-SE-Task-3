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
          {/* <div className="bg-white pt-16 pb-8 ">
            <div className="border-l-16 border-amber-300 px-12">
              <h1 className="text-[40px] font-bold mb-6">
                Cybersecurity Awareness Test Important Message
              </h1>
              <h2 className="text-[16px] font-semibold">
                Scheduled Maintenance.
              </h2>
              <p className="text-sm font-light mb-4">
                Due to scheduled maintenance, Cybersecurity Awareness Test is
                unavailable.
              </p>
              <p className="text-sm font-light mb-4">
                If you require any further assistance, please contact our
                Support Helpdesk on 13 2221, available 24 hours a day, 7 days a
                week.
              </p>
            </div>
            <div className="ps-16 pt-6">
              <div className="primary-button w-fit">
                <Link to="/" className="">
                  Go back
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
