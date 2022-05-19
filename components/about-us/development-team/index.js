import ImgVector from '../../../public/images/Vector.png';
import CustomSwiper, { Developer } from '../custom-swiper';
import DevelopRoadmap from './develop-roadmap';
import styleCss from "./index.module.scss";
import { moduleCss } from "helpers/functions";

const style = moduleCss(styleCss);

const DevelopmentTeam = ({ data }) => {
  return (
    // <div className={'w-full' + style('bg-img')}>
      <div className="lg:max-w-[1440px] m-auto">
        {/* <DevelopRoadmap data={data} /> */}
        <div
          className={
            'lg:flex lg:flex-row-reverse lg:mt-[122px] mt-[38px] items-center justify-center'
          }
        >
          <div className={'flex items-center justify-center'}>
            <img
              className={'lg:mt-0 lg:w-[60px] mt-[48px] w-[40px]'}
              src={ImgVector.src}
            />
          </div>
          <div
            className={
              'lg:mt-0 mt-[16px] lg:text-[48px] text-[38px] px-[20px] text-center font-semibold font-[Quicksand] lg:leading-[110%]'
            }
          >
            Đội ngũ phát triển
          </div>
        </div>
        <div
          className={'lg:flex lg:flex-wrap lg:justify-center mt-[80px] hidden'}
        >
          {data.map((developer, index) => (
            <div key={index} className='w-[20%] m-[2%]'>
              <Developer data={developer} />
            </div>
          ))}
        </div>
        <CustomSwiper data={data} />
      </div>
    // </div>
  );
};

export default DevelopmentTeam;
