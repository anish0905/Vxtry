import NavBar from "../NavBar";
import SecondNavBar from "../SecondNavBar";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import FifthSection from "../FifthSection";
import SixthSection from "../SixthSection";

const Home = () => {
  return (
    <>
        <NavBar />
        <SecondNavBar />
      <div className="background">
        <ThirdSection />
      </div>
      <div>
        <FourthSection />
      </div>
      <div className="bg-slate-300">
      <FifthSection />
      </div>

      <div>
        <SixthSection/>
      </div>
    </>
  );
};

export default Home;
