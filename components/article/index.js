import { useState, useEffect } from 'react';
import { moduleCss } from "helpers/functions";
import styleCss from "./article.module.scss";
import vector from "public/images/Vector1.png";
import Rectangle1332 from "public/images/Rectangle1332.jpg";
import Rectangle_1332l from "public/images/Rectangle_1332l.png";
import Rectangle1333 from "public/images/Rectangle1333.jpg";
import Rectangle1333l from "public/images/Rectangle1333l.png";
import Rectangle1334 from "public/images/Rectangle1334.jpg";
import Rectangle1335 from "public/images/Rectangle1335.jpg";
import BlogsItem from "components/blog/blogItem";
import Rectangle86 from "public/images/Rectangle86.jpg";
import Rectangle87 from "public/images/Rectangle87.jpg";
import Rectangle88 from "public/images/Rectangle88.jpg";
import Link from "next/link";
import Image from "next/image";

const listMenus = [
  { type: 'h1', content: '1/ Tại sao ViRef ứng dụng Blockchain' },
  { type: 'h2', content: '1.1/ Tokenomics là gì?' },
  { type: 'h2', content: '1.2/ Tokenomics ứng dụng trong ViRef như thế nào?' },
  { type: 'h3', content: '1.2.1/ Trả thưởng dễ dàng' },
  { type: 'h3', content: '1.2.2/ Giá trị gia tăng' },
  { type: 'h3', content: '1.2.3/ Win-win-win' },
  { type: 'h2', content: '1.3/ Tại sao cần có Tokenomics?' },
  { type: 'h1', content: '2/ Tại sao ViRef ứng dụng Blockchain' },
  { type: 'h2', content: '2.1/ Tokenomics là gì?' },
  { type: 'h2', content: '2.2/ Tokenomics ứng dụng trong ViRef như thế nào?' },
  { type: 'h2', content: '2.3/ Tại sao cần có Tokenomics?' },
];

const style = moduleCss(styleCss);

export default function Article() {
  const [scrollTop, setScrollTop] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = _ => {
        setScrollTop(window.pageYOffset >= 0 ? window.pageYOffset : 0);
        for (let i = 0; i < 11; i++) {
          console.log(document.getElementById(`menu-${i}`).offsetTop)
          if (document.getElementById(`menu-${i}`).offsetTop >= window.pageYOffset) {
            setActive(i);
            break;
          }
        }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <div className={" flex justify-center " + style("bg article")}>
        <div className={"lg:flex lg:mt-[220px] mt-[128px] lg:pr-[100px] lg:pl-[174px] pr-[20px]  pl-[20px] lg:max-w-[1440px] max-w-[375px]"}>
          <div className="lg:w-[816px]">
            <div id="menu-0" className={'lg:w-[620px] lg:h-[27px] flex flex-row items-center mb-[24px]'}>
              <div className={"lg:w-[89px] lg:h-[27px] lg:text-[18px] lg:mr-[16px] mr-[8px] w-[70px] h-[21px] font-['Mulish'] font-bold text-[14px] leading-[150%] text-black"}>
                <Link href="/">
                  <a>Trang chủ</a>
                </Link>
              </div>
              <div className={'w-[6px] mr-[8px] lg:mr-[16px]'}>
                <img src={vector.src} />
              </div>
              <div className={"lg:w-[48px] lg:h-[27px] lg:text-[18px] lg:mr-[16px] mr-[8px] w-[38px] h-[21px] font-['Mulish'] font-bold text-[14px] leading-[150%] text-black"}>
                <Link href="/blogs">
                  <a>Blogs</a>
                </Link>
              </div>
              <div className={'w-[6px] mr-[8px] lg:mr-[16px]'}>
                <img src={vector.src} />
              </div>
              <div className={"lg:w-[407px] lg:h-[27px] lg:text-[18px] lg:mr-[16px] font-['Mulish'] font-bold text-[14px] leading-[150%] text-black opacity-50"}>8 Chiến lược để trở thành ...</div>
            </div>
            <div id="menu-1" className={"w-full lg:h-[106px] lg:text-[48px] lg:leading-[110%] lg:mb-[48px] font-[600] text-[38px] leading-[100%] text-black mb-[24px]"}>
              8 Chiến lược để trở thành Affiliate Maketer giỏi
            </div>
            {/* <img className={'w-full h-[350px] mb-[24px]' + style('img-re1332-desk')} src={Rectangle_1332l.src} />
          <img className={'w-full h-[350px] mb-[24px]' + style('img-re1332-mobile')} src={Rectangle1332.src} /> */}
            <div id="menu-2" className={'w-full h-[350px] mb-[24px]' + style('img-re1332-desk')}>
              <Image src={Rectangle_1332l} alt="imgBlog" />

            </div>
            <div className={'w-full h-[350px] mb-[24px]' + style('img-re1332-mobile')}>
              <Image src={Rectangle1332} alt="imgBlog" />

            </div>
            {/* <Image src={Rectangle1332} width="100px" height="100px" /> */}
            <div className={"lg:hidden mb-[12px] font-['Mulish'] w-full h-auto font-bold text-[22px] leading-[140%] text-black"}>ViRef bắt đầu như thế nào?</div>
            <div id="menu-3" className={"lg:block lg:h-[78px] lg:text-[28px] mb-[12px] hidden font-['Mulish'] w-full h-auto font-bold text-[38px] leading-[100%] text-black"}>ViRef là gì? ViRef hoạt động như thế nào? Mặt hàng nào nên kinh doanh trên ViRef?</div>
            <div id="menu-4" className={"w-full h-auto font-['Mulish'] text-[18px] leading-[150%] mb-[48px] opacity-70 text-black"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo
              nec eu a tellus massa sem egestas. Bibendum augue mi nullam egestas.
              Mauris eu, risus adipiscing sed dui vulputate. Amet laoreet sit
              tellus tristique tellus porttitor euismod tincidunt. Volutpat tellus
              urna, sed nec, sit urna morbi. Ornare ipsum in rutrum purus
              fringilla penatibus vitae nisl. Diam non et vel enim lorem
              elementum. <br /><br /> Pellentesque at diam convallis nibh tincidunt et ultrices
              nunc, aliquet. Turpis sed imperdiet condimentum ac cursus. Nisi
              eros, nunc, pulvinar viverra velit porta. Aliquam scelerisque eu at
              consequat.
            </div>
            <div className={"lg:hidden mb-[12px] font-['Mulish'] w-full h-auto font-bold text-[22px] leading-[140%] text-black"}>ViRef bắt đầu như thế nào?</div>
            <div id="menu-5" className={"lg:block lg:h-[78px] lg:text-[28px] mb-[12px] hidden font-['Mulish'] w-full h-auto font-bold text-[22px] leading-[140%] text-black"}>ViRef là gì? ViRef hoạt động như thế nào? Mặt hàng nào nên kinh doanh trên ViRef?</div>
            <div id="menu-6" className={"w-full h-auto font-['Mulish'] text-[18px] leading-[150%] mb-[24px] opacity-70 text-black"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo
              nec eu a tellus massa sem egestas. Bibendum augue mi nullam egestas.
              Mauris eu, risus adipiscing sed dui vulputate. Amet laoreet sit
              tellus tristique tellus porttitor euismod tincidunt. Volutpat tellus
              urna, sed nec, sit urna morbi. Ornare ipsum in rutrum purus
              fringilla penatibus vitae nisl. Diam non et vel enim lorem
              elementum. <br /><br />Pellentesque at diam convallis nibh tincidunt et ultrices
              nunc, aliquet. Turpis sed imperdiet condimentum ac cursus. Nisi
              eros, nunc, pulvinar viverra velit porta. Aliquam scelerisque eu at
              consequat.
            </div>
            {/* <img className={'w-full h-[350px] mb-[24px]' + style('img-re1332-mobile')} src={Rectangle1333.src} />
          <img className={'w-full h-[612px] mb-[48px]' + style('img-re1332-desk')} src={Rectangle1333l.src} /> */}
            <div id="menu-7" className={'w-full h-[612px] mb-[48px]' + style('img-re1332-desk')}>
              <Image src={Rectangle1333l} alt="imgBlog" />

            </div>
            <div id="menu-8" className={'w-full h-[350px] mb-[24px]' + style('img-re1332-mobile')}>
              <Image src={Rectangle1333} alt="imgBlog" />

            </div>
            <div id="menu-9" className={"lg:leading-[160%] lg:opacity-90 lg:mb-[40px] w-full h-auto font-['Mulish'] text-[18px] leading-[150%] opacity-70 mb-[24px] text-black"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non est adipiscing tortor, mauris varius. Tellus bibendum dui nullam porttitor egestas tempus vel. Vel sit at gravida viverra aliquet nunc. Pellentesque bibendum at neque sit adipiscing tempus. In et mauris varius tortor sit. Dui ornare at sem et, congue egestas eget. Velit aliquam sed hac lacus, volutpat dui. Iaculis
            </div>
            <div id="menu-10" className={'lg:flex lg:mb-[48px] lg:h-[294px'}>
              {/* <img className={"lg:mr-[32px] lg:w-[392px] lg:h-[294px] w-full h-[350px] mb-[24px]"} src={Rectangle1334.src} />

          <img className={"lg:w-[392px] lg:h-[294px] w-full h-[350px] mb-[24px]"} src={Rectangle1335.src} /> */}

              <div className={'lg:mr-[32px] lg:w-[392px] w-full h-[350px] mb-[24px]'}>
                <Image src={Rectangle1334} alt="imgBlog" />

              </div>
              <div className={'lg:w-[392px] w-full h-[350px] mb-[24px]'}>
                <Image src={Rectangle1335} alt="imgBlog" />

              </div>
            </div>
            <div id="menu-11" className={" lg:opacity-90 lg:mb-[120px] w-full h-auto font-['Mulish'] text-[18px] leading-[150%] mb-[80px] opacity-70 text-black"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo
              nec eu a tellus massa sem egestas. Bibendum augue mi nullam egestas.
              Mauris eu, risus adipiscing sed dui vulputate. Amet laoreet sit
              tellus tristique tellus porttitor euismod tincidunt. Volutpat tellus
              urna, sed nec, sit urna morbi. Ornare ipsum in rutrum purus
              fringilla penatibus vitae nisl. Diam non et vel enim lorem
              elementum.<br /><br /> Pellentesque at diam convallis nibh tincidunt et ultrices
              nunc, aliquet. Turpis sed imperdiet condimentum ac cursus. Nisi
              eros, nunc, pulvinar viverra velit porta. Aliquam scelerisque eu at
              consequat.
            </div>
            <div className={"lg:flex lg:justify-between"}>
              <div className={"mb-[24px] font-['Quicksand'] w-full h-auto text-[38px] font-[600] leading-[100%] text-black"}>Bài viết liên quan</div>
              <div className={"hidden lg:block lg:flex h-[29px]"}>
                <div className={"w-[112px] font-bold text-[22px] leading-[130%] text-black"}>
                  <Link href={'/blogs'}>
                    <a>Xem thêm</a>
                  </Link>
                </div>
                <div className={'w-[6px] mr-[8px] flex items-end'}>
                  <img src={vector.src} />
                </div>
              </div>

            </div>
            <BlogsItem value={{
              tag: "new", img: Rectangle86, title: 'Cơ Chế Trả thưởng của ViRef',
              color: 'text-black', border: "border-[rgba(15, 15, 15, 0.1)]",
              opacity: "opacity-100"
            }} />
            <BlogsItem value={{
              tag: "", img: Rectangle87, title: '8 Chiến lược để trở thành Affiliate Maketer giỏi',
              color: 'text-black', border: "border-[rgba(15, 15, 15, 0.1)]",
              opacity: "opacity-100"
            }} />
            <BlogsItem value={{
              tag: "new", img: Rectangle88, title: 'ViRef là gì? ViRef hoạt động như thế nào? Mặt hàng nào nên kinh doanh trên ViRef?',
              color: 'text-black', item_end: true, border: "border-[rgba(15, 15, 15, 0.1)]",
              opacity: "opacity-100"
            }} />
            <div className={'flex flex-row justify-center mb-[100px]'}>

              <button className={"lg:hidden" + style("btn-add")}>
                <Link href={'/blogs'}>
                  <a>Xem thêm</a>
                </Link>
              </button>
            </div>

          </div>
          {/* Muc luc */}
          <div className="hidden lg:block ml-[32px] w-[320px]">
            <ul className={`${scrollTop > 220 ? 'fixed' : ''} ${active < listMenus.length - 1 ? 'top-[100px]' : 'bottom-[320px]'} font-style-18` + style('menus')}>
              <li className="title font-bold pl-[30px]">Mục Lục</li>
              {
                listMenus.map((item, index) => (
                  <li className={style(item.type) + style(`${active === index ? 'active' : ''}`)} key={index}>
                    <a href={`#menu-${index}`} onClick={_ => setActive(index)}>{item.content}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
