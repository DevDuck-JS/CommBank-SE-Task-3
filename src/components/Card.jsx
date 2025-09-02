import React from "react";
import CardContent from "./CardContent.jsx";
import homeTips from "../data/homeTips.json";

const Card = () => {
  return (
    <div>
      {/* Tip cards */}
      <div className="container-xl lg:container relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {homeTips.map((tip) => (
            <CardContent key={tip.id} tip={tip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
