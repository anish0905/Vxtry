import NavBar from "../NavBar";
import SecondNavBar from "../SecondNavBar";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import FifthSection from "../FifthSection";
// import SixthSection from "../SixthSection";
import HostingPlans from "../HostingPlans";
import FAQSection from "../FAQSection";
import TestimonialSection from "../TestimonialSectio";
import Articles from "../Articles";
import Footer from "../Footer";


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

      {/* <div>
        <SixthSection/>
      </div> */}
      <HostingPlans/>

      <FAQSection/>1
      <TestimonialSection/>
      <Articles/>
      <Footer/>
    </>
  );
};

export default Home;
