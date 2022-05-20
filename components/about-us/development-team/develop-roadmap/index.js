import ImgVector from 'public/images/Vector.png';
import { Swiper, SwiperSlide } from "swiper/react";
import styleCss from "./index.module.scss";
import { moduleCss } from "helpers/functions";
import { useEffect, useState } from 'react';
import { useTranslation } from "next-i18next";

const style = moduleCss(styleCss);

const roadMap = [
  {
    content: [1,2,3]
  },
  {
    content: [1,2,3]
  },
  {
    content: [1,2,3]
  },
  {
    content: [1,2]
  }
]

const SwiperItem = ({ index, setIndex, activeIndex, data }) => {
  const { t } = useTranslation("about-us");
  return (
    <div
      className={"flex flex-col lg:flex-row cursor-pointer"}
      onClick={_ => setIndex(index)}
    >
      <div className={`pr-[24px] lg:pr-[0px] lg:text-right ${index === activeIndex ? 'opacity-100' : 'opacity-50'}` + style('fill-container')} >
        <div className="font-style-14 opacity-70">{t(`roads.${index}.title`)}</div>
        <div className="text-[22px] text-bold font-bold mt-[20px] mb-[12px]">
          {t(`roads.${index}.desc`)}
        </div>
        <div className="font-style-18 opacity-70">
          {roadMap[index].content.map((line, idx) => <p key={idx}>{t(`roads.${index}.content.${idx}`)}</p>)}
        </div>
      </div>
      <div className={'mt-[24px] mb-[24px]' + style(`process ${index > activeIndex ? '' : index} ${index === activeIndex ? 'last' : ''}`)}>
      </div>
      <div className="lg:flex">
        <div>
          Q{index + 1}
          <span className="hidden lg:inline mr-[3px]">, </span>
        </div>
        <div>2022</div>
      </div>
    </div>)
}

const DevelopRoadmap = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation("about-us");

  return (
    <div className={"w-[100%]"}>
      <div className="lg:flex lg:mt-[120px]">
        <div
          className={
            'mt-[38px] items-center justify-center px-[20px] lg:flex-col lg:w-[327px] lg:mt-[0px]'
          }
        >
          <div className={'flex items-center justify-center lg:justify-start'}>
            <img
              className={'lg:mt-0 lg:w-[60px] mt-[48px] w-[40px]'}
              src={ImgVector.src}
            />
          </div>
          <div
            className={
              'lg:mt-[24px] mt-[16px] lg:text-[48px] text-[38px] px-[20px] lg:px-[0px] text-center lg:text-left font-semibold font-[Quicksand] lg:leading-[110%]'
            }
          >
            {t("road")}
          </div>
          <div className="font-style-18 opacity-70 mt-[24px]">
            {t("des-road")}
          </div>
        </div>
        <div className="mt-[64px] lg:w-[8%]"></div>
        <Swiper
          slidesPerView={"auto"}
          className={style("swiper") + 'lg:hsidden'}
          onSlideChange={(event) => setActiveIndex(event.activeIndex)}
        >
          {
            [1, 2, 3, 4].map((_, index) => (
              <SwiperSlide className={style("swiper-slide")} key={index}>
                <SwiperItem index={index} key={index} setIndex={event => event} activeIndex={activeIndex} data={index} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="hidden lg:block">
          {
            [1, 2, 3, 4].map((_, index) => (
              <SwiperItem index={index} key={index} setIndex={event => setActiveIndex(event)} activeIndex={activeIndex} data={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default DevelopRoadmap;
