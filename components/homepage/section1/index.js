import { moduleCss } from "helpers/functions";
import styleCss from "./section1.module.scss";
import Image from "next/image";

import Item1 from "../../../public/images/section1/discover1.png";
import Item2 from "../../../public/images/section1/contribute.png";
import Item3 from "../../../public/images/section1/earn.png";
import { useTranslation } from "next-i18next";

const style = moduleCss(styleCss);


const DATA_CARD = [
  {
    icon: Item1
  },
  {
    icon: Item2
  },
  {
    icon: Item3
  },
];

export const Card = ({ data, index }) => {
  const { t } = useTranslation("homepage");

  return (
    <div className={style("card") + "mt-[24px]"}>
      <div className={"flex flex-col text-center"}>
        <div className={"w-full flex justify-center"}>
          <div className="md:w-[156px] md:h-[156px] w-[120px] h-[120px]">
            <Image src={data.icon} alt="" />
          </div>
        </div>
        <div className={"text-[#FFFFFF] text-[22px] font-bold pt-[24px]"}>
          {t(`section1.cards.${index}.title`)}
        </div>
        <div
          className={"md:text-[18px] text-[16px] pt-[12px]" + style("text-des")}
        >
          {t(`section1.cards.${index}.des`)}
        </div>
      </div>
    </div>
  );
};

export default function Section1() {
  const { t } = useTranslation("homepage");
  return (
    <div className={"w-full flex justify-center" + style("bg section1")}>
      <div className="w-full lg:max-w-[1440px] lg:w-[1440px] lg:px-[100px] lg:pt-[120px] lg:pb-[174px] px-[20px] py-[24px]">
        <div className={style("mobi-pt-100")}>
          <span className={style("cl-linear2 title-size")}>{t("section1.title")}</span>
        </div>
        <div className={"pt-[32px]"}>
          <div
            className={
              "font-semibold text-[48px] leading-[110%]" + style("sub-title")
            }
          >
            <span className={style("cl-linear2")}>ViRef</span> 
             {t('section1.description')}
          </div>
        </div>
        <div className="flex flex-wrap lg:justify-between justify-around md:pt-[76px] pt-[48px]">
          {DATA_CARD.map((item, index) => (
            <Card data={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
