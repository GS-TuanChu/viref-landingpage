import { moduleCss } from 'helpers/functions';
import ImgVector from '../../../public/images/Vector.png';
import styleDevelopmentRoadmap from './development-roadmap.module.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from "next-i18next";

const style = moduleCss(styleDevelopmentRoadmap);

const SwiperItem = ({ index, setIndex, activeIndex }) => (
  <div
    className={"cursor-pointer w-full pt-[55px]"}
    onClick={_ => setIndex(index)}
  >
    {/* <div className={'mt-[24px] mb-[24px] w-full' + style(`process ${index > activeIndex ? '' : index} ${index === activeIndex ? 'last' : ''}`)}>
    </div> */}
    <div className={`lg:flex ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`}>
      <div>
        Q{index + 1}
        <span className="hidden lg:inline mr-[3px]">, </span>
      </div>
      <div>2022</div>
    </div>
  </div>
)

const DevelopmentRoadmap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation("about-us");
  return (
    <div className={'lg:px-[100px] lg:block hidden'}>
      <div
        className={
          'lg:flex lg:flex-col hidden flex items-center justify-center'
        }
      >
        <img
          className={'lg:mt-[80px] lg:w-[60px] mt-[48px] w-[40px]'}
          src={ImgVector.src}
        />
      </div>
      <div
        className={
          'lg:mt-[24px] lg:text-[48px] font-[Quicksand] font-semibold lg:leading-[110%] mt-[16px] text-[38px] px-[20px] text-center'
        }
      >
        {t("dev-roadmap")}
      </div>
      <div
        className={
          'lg:mt-[24px] lg:text-[18px] leading-[150%] opacity-70 px-[150px] text-center'
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit malesuada
        posuere turpis ipsum odio nisl, ultrices tellus est. Sit malesuada pos
      </div>
      <div className={"w-[100%] mt-[100px] mb-[-5px]" + style('process-bar')}>
        <div className={style(`width-${(activeIndex)}`) + style('process-bar-active')}></div>
      </div>
      <div className={'flex w-full'}>
        {
          [1, 2, 3, 4].map((item, index) => (
            <SwiperItem index={index} key={index} setIndex={event => setActiveIndex(event)} activeIndex={activeIndex} />
          ))
        }
      </div>
    </div>
  );
};

export default DevelopmentRoadmap;
