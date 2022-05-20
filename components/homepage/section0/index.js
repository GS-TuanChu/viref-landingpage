import { useState } from "react";
import { moduleCss } from "helpers/functions";
import styleCss from "./section2.module.scss";
import Image from "next/image";
import OneStopImage from "public/images/section0/one-stop.png";
import OneStopToImage from "public/images/section0/one-stop-to.png";
import HandPhoneImage from "public/images/section0/hand-phone.png";
import { NavigationModal } from "./join-modal";
import { useTranslation } from "next-i18next";

const style = moduleCss(styleCss);

export default function Section0() {
  const [isModal, setOpentModal] = useState(false);

  const handleDownload = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log({ userAgent });
    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=godream.vn.vinet";
      return;
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = "https://apps.apple.com/vn/app/viref/id1604803348";
      return;
    }
    setOpentModal(true);
  };
  const handleClose = () => {
    setOpentModal(false);
  };

  const { t } = useTranslation("homepage");

  return (
    <>
      <div className="w-[100%]">
        <div
          className={
            "lg:pl-[100px] flex flex-col justify-between lg:flex-row lg:pt-[140px]" +
            style("bg section2")
          }
        >
          <div className="lg:flex lg:flex-col px-[20px]">
            <div
              className={
                "pt-[100px] lg:pt-[50px] text-[#061D27]" + style("title")
              }
            >
              <div>{t("section0.solution")}</div>
              <div className="flex">
                <div className="mr-[5px] relative w-[170px] lg:w-[365px]">
                  <span className="absolute z-10">{t("section0.one-stop")}</span>
                  <div className={style("image-onestop") + "lg:hidden"}>
                    <Image src={OneStopImage} width="193px" height="45px" />
                  </div>
                  <div
                    className={style("image-onestop-to") + "lg:block hidden"}
                  >
                    <Image src={OneStopToImage} width="403px" height="82px" />
                  </div>
                </div>
                <div>Affiliate</div>
              </div>
            </div>
            <div className="mt-[24px] font-style-16 lg:w-[391px] opacity-60">
              {t("section0.description")}
              <a
                className={style("outside-link")}
                href="/Gioi-thieu-ViRef.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("section0.extra")}
              </a>
            </div>
            <div
              className={
                "mt-[24px] font-style-18 font-bold lg:mt-[110px]" +
                style("join-now")
              }
            >
              <span className="lg:hidden" onClick={handleDownload}>
              {t("section0.join")}
              </span>
              <span
                className="lg:block hidden cursor-pointer"
                onClick={handleDownload}
              >
                {t("section0.join")}
              </span>
            </div>
          </div>
          {/* <div className="lg:min-w-[600px] relative">
                    <div className="absolute right-[-20px] top-[-40px] lg:top-[-91px]"><Image src={HandPhoneImage} /></div>
                </div> */}
          <Image className="" src={HandPhoneImage} />
        </div>
      </div>
      {isModal && <NavigationModal handleClose={handleClose} />}
    </>
  );
}
