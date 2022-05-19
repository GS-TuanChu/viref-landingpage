import { moduleCss } from "helpers/functions";
import styleCss from "./blog.module.scss";
import BlogsItem from "./blogItem";
import { items } from "./blogItem/constant";
import search from "public/images/zoom_in2.png";
import JoinUs from '../contact-us/join-us'
// import BlogHome from "components/blog-home";


const style = moduleCss(styleCss);

export default function Blog() {
  const listItems = items.map((number, index) => (
    <BlogsItem key={index} value={number} />
  ));
  return (
    <>
    <div>
      <div className={"w-full flex flex-col items-center" + style("bg blog")}>
        <div
          className={
            "lg:flex lg:flex-row lg:justify-center lg:pr-[100px] lg:pl-[100px] pr-[20px] pl-[20px]  lg:mt-[220px] mt-[128px] lg:max-w-[1440px] max-w-[375px] w-full"
          }
        >
          <div className={"lg:mr-[8%] lg:w-[36%] flex flex-col  w-full"}>
            <div
              className={
                "w-full lg:h-[77px] lg:text-[80px] font-[600] lg:leading-[96%] lg:mb-[32px] mb-[24px]" +
                style("text-blog")
              }
            >
              Blogs
            </div>
            <div className={"lg:max-w-[286px] w-full h-auto lg:text-[18px] lg:leading-[140%] lg:mb-[40px] mb-[24px]"+style("text-detail")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              malesuada posuere turpis ipsum odio nisl, ultrices tellus est.
            </div>
            <div className={"flex relative mb-[48px] w-full"}>
            <input className={"w-full pl-[20px]" + style("input-search")} placeholder="Tìm kiếm bài viết"></input>
            <img className={"lg:right-3.5 w-[20px] h-[20px] absolute top-[19px] right-[20px]"} src={search.src} />

            </div>
          </div>
          <div className={"lg:w-[90%] w-full"}>{listItems}</div>
        </div>
        <div className={"lg:w-[1440px] lg:mr-[100px] lg:ml-[100px] mr-[20px] ml-[20px]"}>
        <JoinUs />
        </div>
      </div>
      {/* <BlogHome /> */}
    </div>
    </>
  );
}
