const CardContent = ({ tip }) => {
  return (
    <>
      <div className="border-1 border-[#E1E1E1] flex flex-col">
        <div className="pt-20 px-8">
          <h3 className="mb-4 text-xl font-semibold">{tip.title}</h3>
          {/* list items */}
          <div className="ps-5 pb-8">
            <ul className="list-disc">
              {tip.tips.map((item, index) => (
                <li key={index}>
                  <p>
                    {item.highlight && (
                      <span className="font-bold"> {item.highlight}</span>
                    )}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Button */}
        <div className="px-8 pb-8 mt-auto">
          <div className="secondary-button">
            <a href="#" className="block text-center py-3">
              Discover More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContent;
