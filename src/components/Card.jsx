import { useState } from "react";
import CardContent from "./CardContent.jsx";
import financialSecurityTips from "../data/financialSecurityTips.json";

const Card = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  let tips = isShowMore
    ? financialSecurityTips
    : financialSecurityTips.slice(0, 3);

  return (
    <div>
      {/* Tip cards */}
      <div className="container-xl lg:container relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {tips.map((tip) => (
            <CardContent key={tip.id} tip={tip} />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex pt-6 items-center justify-center">
        <div
          className="highlighted-button"
          onClick={() => setIsShowMore((previousState) => !previousState)}
        >
          {isShowMore ? "Show fewer tips" : "Show more tips"}
        </div>
      </div>
    </div>
  );
};

export default Card;
