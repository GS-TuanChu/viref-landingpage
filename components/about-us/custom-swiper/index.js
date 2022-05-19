import { useRef, useState } from 'react';
import { moduleCss } from 'helpers/functions';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgRight from '../../../public/images/icon-right.png';
import ImgLeft from '../../../public/images/icon-left.png';
import styleCustomSwiper from './custom-swiper.module.scss';
import ImgLinkedin from '../../../public/images/icon-linkedin.png';
import { Navigation } from 'swiper';
import 'swiper/css';
const style = moduleCss(styleCustomSwiper);

export const Developer = ({ data }) => {
  return (
    <div className='flex justify-center'>
      <div className={'flex flex-col items-center justify-center cursor-pointer'}>
        <div className={'' + style('ava-block')}>
        <a href={data.link} target="_blank">
          <img className={style('ava-linkedin')} src={data.ava.src} />
          <img className={style('icon-linkedin')} src={ImgLinkedin.src} />
        </a>
        </div>
        <div
          className={
            'mt-[24px] text-[22px] font-bold leading-[140%] lg:opacity-80' + style('dev-name')
          }
        >
          {data.name}
        </div>
        <div
          className={
            'lg:text-[18px] leading-[150%] opacity-50 mt-[6px] text-[16px] font-bold uppercase'
          }
        >
          {data.des}
        </div>
      </div>
    </div>
  );
};

const CustomSwiper = ({ data }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={'lg:hidden mt-[48px] px-[20px]' + style('swiper-block')}>
        <button onClick={() => swiperRef.current.swiper.slideNext()}>
          <img
            className={'z-10' + style('swiper-button-next')}
            src={ImgRight.src}
          />
        </button>
        <button onClick={() => swiperRef.current.swiper.slidePrev()}>
          <img
            className={'z-10' + style('swiper-button-prev')}
            src={ImgLeft.src}
          />
        </button>
        <Swiper ref={swiperRef} modules={[Navigation]} className='mySwiper' onSlideChange={(event) => setActiveIndex(event.activeIndex)}>
          {data.map((developer, index) => (
            <SwiperSlide key={index}>
              <Developer data={developer} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-[15px] font-semibold">
          {activeIndex + 1} / {data.length}
        </div>
      </div>
    </>
  );
};

export default CustomSwiper;
