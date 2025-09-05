import React from "react";
import EmergencyTips from "../data/emergencyTips.json";

const ListContent = () => {
  return (
    <div className="pt-16 pe-16 w-full lg:w-1/2">
      <h2 className="mb-10">{EmergencyTips.title}</h2>
      <div className="ps-5 mb-4">
        <ul className="list-disc font-light space-y-2">
          {EmergencyTips.tips.map((tip) => (
            <li>
              <p>
                <span className="font-bold">{tip.highlight} </span>
                {tip.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListContent;
