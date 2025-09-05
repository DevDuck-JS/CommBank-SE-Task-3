import chatIcon from "../assets/chatIcon.svg";
import phoneIcon from "../assets/phoneIcon.svg";
import branchIcon from "../assets/branchIcon.svg";

const Supports = () => {
  return (
    <>
      {/* We can help */}
      <div className="p-16">
        <div className="text-3xl font-bold mb-6">We can help</div>
        <div className="flex justify-between">
          <div className="help-item">
            <span>
              <img src={chatIcon} className="h-16 w-auto" />
            </span>
            <p className="text-lg font-semibold pl-6 pr-4 py-2">
              Your questions answered
            </p>
          </div>
          <div className="help-item border-l-1 border-gray-300">
            <span>
              <img src={phoneIcon} alt="" className="ml-6" />
            </span>
            <p className="text-lg font-semibold pl-6 pr-4 py-2">
              Call 13 2221 anytime
            </p>
          </div>
          <div className="help-item border-l-1 border-gray-300">
            <span>
              <img src={branchIcon} alt="" className="ml-6" />
            </span>
            <p className="text-[20px] font-semibold pl-6 pr-4 py-2">
              Visit your nearest branch
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supports;
