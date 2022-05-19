
import DevelopRoadmap from "components/about-us/development-team/develop-roadmap"
import DevelopmentTeam from "components/about-us/development-team"
import CustomSwiper, { Developer } from 'components/about-us/custom-swiper';
import Sponsor from "components/about-us/sponsor";
import styleCss from "./section5.module.scss";
import { moduleCss } from "helpers/functions";
import ImgAva from "public/images/Rectangle147.png";
import NamDN from "public/images/namdn.jpg";
import ThinhBP from "public/images/thinhbp2.jpeg";
import HongNS from "public/images/hongns.jpeg";
import HungLS from "public/images/hungls.jpeg";
import LiemPND from "public/images/liempnd.jpeg";
import ThuyNT from "public/images/thuynt.jpeg";
import HoanNT from "public/images/hoannt.jpeg";
import HaoDN from "public/images/haodn.jpg";
import BaoPQ from "public/images/baopq.jpeg";
import ImgAva1 from "public/images/Rectangle148.png";



const style = moduleCss(styleCss);
const DATA_DEVELOPER = [
    {
      ava: ImgAva,
      name: "Nghiêm Tiến Viễn",
      des: "CEO",
      link: "https://www.linkedin.com/in/viennt/"
    },
    {
      ava: LiemPND,
      name: "Phạm Ngọc Duy Liêm",
      des: "CGO",
      link: "https://www.linkedin.com/in/pham-liem-eng-mba-bbba87a0/"
    },
    {
      ava: HoanNT,
      name: "Nguyễn Trọng Hoàn",
      des: "CTO",
      link: "https://www.linkedin.com/in/trong-hoan-366a4b55/"
    },
    {
      ava: HongNS,
      name: "Nguyễn Sỹ Hồng",
      des: "Legal Advisor",
      link: "https://www.linkedin.com/in/hong-sy-nguyen-56565a2a/"
    },
    {
      ava: HungLS,
      name: "Lê Sỹ Hưng",
      des: "Technical Manager",
      link: "https://www.linkedin.com/in/hungls/"
    },
    {
      ava: ThinhBP,
      name: "Bùi Phước Thịnh",
      des: "Blockchain Dev",
      link: "https://www.linkedin.com/in/thinh-bui-532b14193/"
    },
  ];
  
  const DATA_BLOCKCHAIN = [
    {
      ava: BaoPQ,
      name: "Phạm Quốc Bảo",
      des: "Blockchain",
      link: "https://www.linkedin.com/"
    },
    {
      ava: NamDN,
      name: "Đinh Nho Nam",
      des: "Blockchain, AI",
      link: "https://www.linkedin.com/in/nam-%C4%91inh-nho-1341b7a5/"
    },
    {
      ava: HaoDN,
      name: "Đinh Nho Hào",
      des: "Blockchain, AI",
      link: "https://www.linkedin.com/in/dinhnhohao/"
    },
  ];
const Section5 = () => {
    return (
        <div className={"w-full" + style("bg-img")}>
        <div className="lg:max-w-[1440px] m-auto">
        <div>
        <DevelopRoadmap data={DATA_DEVELOPER} />

        <DevelopmentTeam data={DATA_DEVELOPER} />
        <div
          className={
            "lg:text-[48px] lg:leading-[110%] mt-[80px] text-[38px] px-[20px] text-center font-semibold font-[Quicksand]"
          }
        >
          Cố vấn Blockchain
        </div>
        <div
          className={
            "lg:grid lg:grid-cols-4 lg:gap-4 lg:gap-y-[80px] hidden"
          }
        ></div>
        <div
          className={
            "lg:flex lg:flex-wrap lg:justify-center mt-[80px] hidden"
          }
        >
          {DATA_BLOCKCHAIN.map((developer, index) => (
            <div key={index} className="w-[20%] m-[1%]">
              <Developer data={developer} />
            </div>
          ))}
        </div>
        <CustomSwiper data={DATA_BLOCKCHAIN} />

        
      </div>
        </div>
        <div className="w-full">
          <Sponsor />
        </div>
      </div>
    )
}
export default Section5;