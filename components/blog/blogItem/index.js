import { moduleCss } from "helpers/functions";
import Image from "next/image";
import Link from "next/link";
import styleCss from "./blogItem.module.scss";

const style = moduleCss(styleCss);

const BlogsItem = (props) => {
  const value = props.value;
  return (
    <div>
      <div className={"flex flex-col items-center lg:flex-row lg:mb-[20px] w-full mb-[32px]"}>
        <div className={"flex relative lg:mr-[32px] lg:w-[180px] lg:h-[180px] lg:mb-0 w-full h-[335px] mb-[24px]"}>
          {value.tag && (
            <div className={value.tag == 'hot' ? style("title-hot") : style("title-new")}>
              <span>{value.tag}</span>
            </div>
          )}
          <Link href="/blogs/acticle-detail">
            <a className={"w-full "}>
          <div className={"w-full h-full mb-[24px] rounded-2xl "}>
            <Image src={value.img} alt="Girl in a jacket" className={"rounded-2xl"} />
          </div>

            </a>
          </Link>
          
        </div>
        <div className={"lg:w-[73%] w-full lg:h-[180px] flex flex-col justify-between"}>
        <div className={`lg:text-[22px] lg:leading-[140%]  w-full font-['Mulish'] ${value.color} font-bold text-[22px] leading-[140%] mb-[12px]`}>
        <Link href="/blogs/acticle-detail"> 
          <a>{value.title}</a>
        </Link>
        </div>
        
        <div className={`lg:h-[50px]  w-full font-['Mulish'] font-[400] text-[18px] leading-[140%] opacity-60 mb-[12px] ${value.color}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit malesuada posuere turpis ipsum odio nisl, ultrices tellus est.
        </div>
        <div className={`w-full font-['Mulish'] italic font-bold text-[18px] leading-[140%] ${value.color} opacity-80 `}>22/02/2022</div>
        </div>
        
      </div>
      {!value.item_end && <div className={`lg:w-[100%] w-full ${value.border} border-solid border ${value.opacity}` + style("line")}></div>}
      
    </div>
  );
};

export default BlogsItem;
