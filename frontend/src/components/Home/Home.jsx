import NavBar from "../NavBar";
import SecondNavBar from "../SecondNavBar";
import ThirdSection from "../ThirdSection";
import FifthSection from "./FifthSection";
import FourthSection from "./FourthSection";

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
