import { moduleCss } from "helpers/functions";
import styleCss from "./blog-home.module.scss";
// import { items } from "./blogItem/constant";
// import search from "public/images/zoom_in2.png";
// import JoinUs from "../join-us";
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import Img from "public/images/Rectangle8.jpg";
import Rectangle82 from "public/images/Rectangle82.jpg";
import Rectangle83 from "public/images/Rectangle83.jpg";
import vectorall from "public/images/Vectorall.png";
import ImgRight from "public/images/icon-right.png";
import ImgLeft from "public/images/icon-left.png";
import Link from "next/link";

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // import required modules
// import { Navigation } from 'swiper';
// import { useRef } from 'react';
import BlogsItem from "components/blog/blogItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const style = moduleCss(styleCss);

export default function BlogHome() {
  //   const listItems = items.map((number, index) => (
  //     <BlogsItem key={index} value={number} />
  //   ));
  // const swiperRef1 = useRef(null);
  return (
    <>
      <div
        className={"w-full flex flex-col items-center" + style("bg blog-home")}
      >
        <div
          className={
            "lg:pr-[100px] lg:pl-[100px] lg:pt-[120px] lg:pb-[120px] pr-[20px] pl-[20px] pt-[80px] pb-[80px] lg:flex lg:max-w-[1440px] w-full"
          }
        >
          <div
            className={
              "lg:mr-[100px] lg:w-[30%] flex flex-col items-center w-full"
            }
          >
            <div
              className={
                "w-full lg:h-[88px] text-[48px] lg:text-[80px] leading-[120%] lg:leading-[96%] lg:mb-[32px] mb-[24px]" +
                style("text-vinet")
              }
            >
              Blogs
            </div>
            <div
              className={
                "lg:w-full h-auto lg:text-[18px] lg:leading-[140%] lg:mb-[48px] mb-[24px]" +
                style("text-detail")
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              malesuada posuere turpis ipsum odio nisl, ultrices tellus est.
            </div>
            <div className={"hidden lg:block lg:flex w-full"}>
              <div
                className={
                  "font-bold mr-[12px] text-[22px] leading-[130%]" +
                  style("txt-all")
                }
              >
                Xem tất cả
              </div>
              <div className={"w-[6px] flex items-center"}>
                <img src={vectorall.src} />
              </div>
            </div>
          </div>
          <div className={"lg:w-[70%] lg:block hidden"}>
            <BlogsItem
              value={{
                tag: "new",
                img: Img,
                title: "Cơ Chế Trả thưởng của ViRef",
                color: "text-white",
                border: "border-[rgba(255, 255, 255, 0.1)]",
                opacity: "opacity-30",
              }}
            />
            <BlogsItem
              value={{
                tag: "",
                img: Rectangle82,
                title: "8 Chiến lược để trở thành Affiliate Maketer giỏi",
                color: "text-white",
                border: "border-[rgba(255, 255, 255, 0.1)]",
                opacity: "opacity-30",
              }}
            />
            <BlogsItem
              value={{
                tag: "new",
                img: Rectangle83,
                title:
                  "ViRef là gì? ViRef hoạt động như thế nào? Mặt hàng nào nên kinh doanh trên ViRef?",
                color: "text-white",
                item_end: true,
                border: "border-[rgba(255, 255, 255, 0.1)]",
                opacity: "opacity-30",
              }}
            />
          </div>
          <div className={"lg:hidden mt-[48px] " + style("swiper-block")}>
            <Swiper slidesPerView={"auto"} className={style("swiper")}>
              <SwiperSlide
                className={"w-[295px] mr-[20px]" + style("swiper-slide")}
              >
                <div className={"w-full"}>
                  <div className={"flex flex-col items-center w-full"}>
                    <div className={"flex relative w-full h-[295px] mb-[20px]"}>
                      <div className={style("title-hot")}>
                        <span>hot</span>
                      </div>
                      <Link href="/blogs/acticle-detail">
                        <a>
                          <img
                            className={"w-full h-full rounded-2xl "}
                            src={Img.src}
                            alt="Girl in a jacket"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className={"w-full flex flex-col"}>
                      <div
                        className={
                          " w-full font-['Mulish'] text-white font-[700] font-bold text-[22px] leading-[140%] mb-[12px]"
                        }
                      >
                        <Link href="/blogs/acticle-detail">
                          <a>Cơ Chế Trả thưởng của ViRef</a>
                        </Link>
                      </div>

                      <div
                        className={
                          "w-full font-['Mulish'] font-[400] text-[18px] leading-[140%] opacity-60 mb-[12px] text-white"
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit malesuada posuere turpis ipsum odio nisl, ultrices
                        tellus est.
                      </div>
                      <div
                        className={
                          " w-full font-['Mulish'] font-[700] italic font-bold text-[18px] leading-[140%] text-white opacity-80 "
                        }
                      >
                        22/02/2022
                      </div>
                    </div>
                  </div>
                  <div className={"w-full" + style("line")}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className={"w-[295px] mr-[20px]" + style("swiper-slide")}
              >
                <div>
                  <div
                    className={
                      "flex flex-col items-center lg:flex-row lg:mb-[20px] w-full mb-[32px]"
                    }
                  >
                    <div
                      className={
                        "flex relative lg:mr-[32px] lg:w-[180px] lg:h-[180px] lg:mb-0 w-full h-[295px] mb-[20px]"
                      }
                    >
                      <div className={style("title-hot")}>
                        <span>hot</span>
                      </div>
                      <Link href="/blogs/acticle-detail">
                        <a>
                          <img
                            className={"w-full h-full mb-[24px] rounded-2xl "}
                            src={Rectangle82.src}
                            alt="Girl in a jacket"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className={"lg:w-[70%] w-full lg:h-[180px] flex flex-col"}
                    >
                      <div
                        className={
                          "lg:text-[22px] lg:leading-[140%] lg:mb-[16px] w-full font-['Mulish'] text-white font-[700] font-bold text-[22px] leading-[140%] mb-[12px]"
                        }
                      >
                        <Link href="/blogs/acticle-detail">
                          <a>Cơ Chế Trả thưởng của ViRef</a>
                        </Link>
                      </div>

                      <div
                        className={
                          "lg:h-[50px] lg:mb-[58px] w-full font-['Mulish'] font-[400] text-[18px] leading-[140%] opacity-60 mb-[12px] text-white"
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit malesuada posuere turpis ipsum odio nisl, ultrices
                        tellus est.
                      </div>
                      <div
                        className={
                          "lg:mb-[20px] w-full font-['Mulish'] font-[700] italic font-bold text-[18px] leading-[140%] text-white opacity-80 "
                        }
                      >
                        22/02/2022
                      </div>
                    </div>
                  </div>
                  <div className={"lg:w-[100%] w-full" + style("line")}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className={"w-[295px] mr-[20px]" + style("swiper-slide")}
              >
                <div>
                  <div
                    className={
                      "flex flex-col items-center lg:flex-row lg:mb-[20px] w-full mb-[32px]"
                    }
                  >
                    <div
                      className={
                        "flex relative lg:mr-[32px] lg:w-[180px] lg:h-[180px] lg:mb-0 w-full h-[295px] mb-[20px]"
                      }
                    >
                      <div className={style("title-hot")}>
                        <span>hot</span>
                      </div>
                      <Link href="/blogs/acticle-detail">
                        <a>
                          <img
                            className={"w-full h-full mb-[24px] rounded-2xl "}
                            src={Rectangle83.src}
                            alt="Girl in a jacket"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className={"lg:w-[70%] w-full lg:h-[180px] flex flex-col"}
                    >
                      <div
                        className={
                          "lg:text-[22px] lg:leading-[140%] lg:mb-[16px] w-full font-['Mulish'] text-white font-[700] font-bold text-[22px] leading-[140%] mb-[12px]"
                        }
                      >
                        <Link href="/blogs/acticle-detail">
                          <a>Cơ Chế Trả thưởng của ViRef</a>
                        </Link>
                      </div>

                      <div
                        className={
                          "lg:h-[50px] lg:mb-[58px] w-full font-['Mulish'] font-[400] text-[18px] leading-[140%] opacity-60 mb-[12px] text-white"
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit malesuada posuere turpis ipsum odio nisl, ultrices
                        tellus est.
                      </div>
                      <div
                        className={
                          "lg:mb-[20px] w-full font-['Mulish'] font-[700] italic font-bold text-[18px] leading-[140%] text-white opacity-80 "
                        }
                      >
                        22/02/2022
                      </div>
                    </div>
                  </div>
                  <div className={"lg:w-[100%] w-full" + style("line")}></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={"lg:hidden flex w-full mt-[48px] mb-[80px]"}>
            <div
              className={
                "font-bold mr-[12px] text-[22px] leading-[130%]" +
                style("txt-all")
              }
            >
              <Link href="/blogs">
                <a>Tìm hiểu thêm</a>
              </Link>
            </div>
            <div className={"w-[6px] flex items-center"}>
              <img src={vectorall.src} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// lg:pr-[100px] lg:pl-[100px] lg:pt-[120px] lg:pb-[120px] pr-[20px] pl-[20px] pt-[80px] pb-[80px] flex flex-col items-center
