import React from "react";
import EmergencyTips from "../data/emergencyTips.json";

const ListContent = () => {
  return (
    <div className="pt-16 pe-16 w-full lg:w-1/2">
      <p className="text-4xl font-bold mb-10">{EmergencyTips.title}</p>
      <div className="ps-5 mb-4">
        {EmergencyTips.tips.map((tip) => (
          <ul className="list-disc font-light space-y-2">
            <li>
              <span className="font-bold">{tip.highlight} </span>
              {tip.description}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ListContent;
