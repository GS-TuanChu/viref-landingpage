import { moduleCss } from "helpers/functions";
import styleCss from "./section1.module.scss";
import Image from "next/image";

import Item1 from "../../../public/images/section1/discover1.png";
import Item2 from "../../../public/images/section1/contribute.png";
import Item3 from "../../../public/images/section1/earn.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "section1"])),
  },
});

const style = moduleCss(styleCss);

const DATA_CARD = [
  {
    icon: Item1,
    title: "Tiết kiệm chi phí quảng cáo, tiếp thị",
    des: "Thay vì trả tiền quảng cáo cho Google, Facebook mà không đảm bảo có đơn. Với ViRef người bán chỉ phải trả chi phí thưởng cho mỗi đơn hàng đã thành công.",
  },
  {
    icon: Item2,
    title: "Tạo ra môi trường cạnh tranh lành mạnh, hiệu quả",
    des: "ViRef ưu tiên các sản phẩm/dịch vụ mang lại nhiều giá trị cho người mua/người tiêu dùng. Người giới thiệu được quyền chọn sản phẩm chất lượng tốt nhất để bán.",
  },
  {
    icon: Item3,
    title: "Áp dụng Blockchain - Token hóa hệ sinh thái",
    des: "Với việc ứng Blockchain, việc nhận thưởng bằng token sẽ mang nhiều giá trị gia tăng cho tất cả các bên tham gia theo thời gian.",
  },
];

export const Card = ({ data }) => {
  return (
    <div className={style("card") + "mt-[24px]"}>
      <div className={"flex flex-col text-center"}>
        <div className={"w-full flex justify-center"}>
          <div className="md:w-[156px] md:h-[156px] w-[120px] h-[120px]">
            <Image src={data.icon} alt="" />
          </div>
        </div>
        <div className={"text-[#FFFFFF] text-[22px] font-bold pt-[24px]"}>
          {data.title}
        </div>
        <div
          className={"md:text-[18px] text-[16px] pt-[12px]" + style("text-des")}
        >
          {data.des}
        </div>
      </div>
    </div>
  );
};

export default function Section1() {
  const { t } = useTranslation("section1");
  return (
    <div className={"w-full flex justify-center" + style("bg section1")}>
      <div className="w-full lg:max-w-[1440px] lg:w-[1440px] lg:px-[100px] lg:pt-[120px] lg:pb-[174px] px-[20px] py-[24px]">
        <div className={style("mobi-pt-100")}>
          <span className={style("cl-linear2 title-size")}>{t("title")}</span>
        </div>
        <div className={"pt-[32px]"}>
          <div
            className={
              "font-semibold text-[48px] leading-[110%]" + style("sub-title")
            }
          >
            <span className={style("cl-linear2")}>ViRef</span> - Cộng đồng mà{" "}
            {`\n`}
            bất cứ ai cũng có thể làm kinh tế, {`\n`}
            tăng thêm doanh số và thu nhập.
          </div>
          <div
            className={
              "font-semibold text-[48px] leading-[110%]" + style("sub-title")
            }
          >
            {t("description")}
          </div>
        </div>
        <div className="flex flex-wrap lg:justify-between justify-around md:pt-[76px] pt-[48px]">
          {DATA_CARD.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
