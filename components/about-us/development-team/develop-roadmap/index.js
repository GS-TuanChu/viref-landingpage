import ImgVector from 'public/images/Vector.png';
import { Swiper, SwiperSlide } from "swiper/react";
import styleCss from "./index.module.scss";
import { moduleCss } from "helpers/functions";
import { useEffect, useState } from 'react';

const style = moduleCss(styleCss);
const roadMap = [
  {
    title: 'Khởi đầu',
    desc: 'Xây dựng nền tảng ứng dụng',
    content: [
      'Hoàn thiện bộ máy công ty',
      'Xây dựng MVP ứng dụng',
      'Dev và audit smart contract',
    ]
  },
  {
    title: 'Ra mắt',
    desc: 'Giới thiệu ứng dụng ViRef',
    content: [
      'Xây dựng app v2',
      'Kêu gọi các nhà quảng cáo tham gia hình thức tiếp thị ViRef',
      'Deploy smart contract, Private sale, Xây dựng sàn giao dịch'
    ]
  },
  {
    title: 'Tăng tốc',
    desc: 'Triển khai crypto currency',
    content: [
      'Hoàn thiện toàn bộ tính năng giao dịch blockchain trên app',
      'Xây dựng hệ thống sàn giao dịch orderbook trên app',
      'Tiếp tục phát triển các nhà quảng cáo tham gia ViRef',
    ]
  },
  {
    title: 'Cất cánh',
    desc: 'Gia tăng nhiều giá trị cho cộng đồng',
    content: [
      'Triển khai dự án NFT sử dụng đồng VREF để giao dịch',
      'Xây dựng hệ sinh thái Defi xung quanh token VREF như bảo hiểm, thế chấp..'
    ]
  }
]

const SwiperItem = ({ index, setIndex, activeIndex, data }) => (
  <div
    className={"flex flex-col lg:flex-row cursor-pointer"}
    onClick={_ => setIndex(index)}
  >
    <div className={`pr-[24px] lg:pr-[0px] lg:text-right ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`+style('fill-container')} >
      <div className="font-style-14 opacity-70">{data.title}</div>
      <div className="text-[22px] text-bold font-bold mt-[20px] mb-[12px]">
        {data.desc}
      </div>
      <div className="font-style-18 opacity-70">
        {data.content.map((line,idx) => <p key={idx}>{line}</p>)}
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
  </div>
)

const DevelopRoadmap = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
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
            Lộ trình phát triển
          </div>
          <div className="font-style-18 opacity-70 mt-[24px]">
            Chúng tôi đang nỗ lực từng ngày để đưa đến cho cộng đồng một dự án blockchain thực chất.
          </div>
        </div>
        <div className="mt-[64px] lg:w-[8%]"></div>
        <Swiper
          slidesPerView={"auto"}
          className={style("swiper") + 'lg:hidden'}
          onSlideChange={(event) => setActiveIndex(event.activeIndex)}
        >
          {
            [1, 2, 3, 4].map((item, index) => (
              <SwiperSlide className={style("swiper-slide")} key={index}>
                <SwiperItem index={index} key={index} setIndex={event => event} activeIndex={activeIndex} data={roadMap[index]} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="hidden lg:block">
          {
            [1, 2, 3, 4].map((item, index) => (
              <SwiperItem index={index} key={index} setIndex={event => setActiveIndex(event)} activeIndex={activeIndex} data={roadMap[index]} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default DevelopRoadmap;
