import NavBar from "../NavBar";
import SecondNavBar from "../SecondNavBar";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import FifthSection from "../FifthSection";

const Home = () => {
  return (
    <>
      <div className="background">
        <NavBar />
        <SecondNavBar />
        <ThirdSection />
      </div>
      <div>
        <FourthSection />
      </div>
      <FifthSection />
    </>
  );
};

export default Home;
