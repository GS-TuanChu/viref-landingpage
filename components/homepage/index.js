import Section0 from "./section0";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section5 from "./section5";
import DevelopmentTeam from "components/about-us/development-team";
import BlogHome from "components/blog-home";
import ContactChannel from "components/contact-us/contact-channels";
import JoinUs from "components/contact-us/join-us";
import ImgAva from "../../public/images/Rectangle147.png";
import ImgAva1 from "../../public/images/Rectangle148.png";
import CustomSwiper, { Developer } from "components/about-us/custom-swiper";
import Sponsor from "components/about-us/sponsor";
import DevelopRoadmap from "components/about-us/development-team/develop-roadmap";


const HomePage = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col">
          <Section0 />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section5 />
          
          <div className={"w-full flex justify-center"}>
            <div
              className={
                "lg:max-w-[1440px] lg:px-[100px] px-[20px] lg:pt-[120px] pt-[80px] w-full"
              }
            >
              <ContactChannel />
              <JoinUs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; // <BlogHome />

export default HomePage;
