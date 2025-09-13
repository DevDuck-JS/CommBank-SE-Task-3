import Hero from "../components/Hero.jsx";
import Content from "../components/Content.jsx";

const HomePage = () => {
  return (
    <>
      <div className="px-8">
        {/* Breadcrum */}
        {/* Hero */}

        <div className="content-max-width mx-auto">
          <Hero />
          <Content />
        </div>
      </div>
    </>
  );
};

export default HomePage;
