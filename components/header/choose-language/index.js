import { useState, useRef } from "react";
import { moduleCss } from "helpers/functions";
import styleCss from "./index.module.scss";
import VietNamFlag from "public/images/vietnam-flag.png";
import EnglishFlag from "public/images/uk-flag.jpeg";
import DownArrowImg from "public/images/drop-down.png";
import { useOnClickOutside } from "hooks/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";

const style = moduleCss(styleCss);

export default function ChooseLanguage() {
  const ref = useRef();

  const [showUl, setShowUl] = useState(false);

  useOnClickOutside(ref, () => setShowUl(false));

  const router = useRouter();

  // const { i18n } = useTranslation();

  const { locale } = useRouter();

  const language = locale === "en" ? { name: "English", img: EnglishFlag } : { name: "Tiếng Việt", img: VietNamFlag };

  const handleLocaleChange = (lan) => { 
    router.push(router.route, router.asPath, {
      locale: lan,
    });
  };

  return (
    <div className={style("header")}>
      <div className={style("nav")}>
        <div
          className={style("lang-menu")}
          ref={ref}
          onClick={(_) => setShowUl(!showUl)}
        >
          <div className={"flex justify-between" + style("selected-lang")}>
            <Image src={language.img.src} width="30px" height="20px" />
            <span className="ml-[7px] opacity-70 hidden lg:inline mr-[9px]">
              {language.name}
            </span>
            <Image src={DownArrowImg.src} width="7px" height="5px" />
          </div>
          {showUl && (
            <ul>
              <li>
                <a
                  className={style("de")}
                  onClick={() => handleLocaleChange("vi")}
                >
                  <Image src={VietNamFlag.src} width="30px" height="20px" />
                  <span className="hidden lg:inline ml-[6px]">Tiếng Việt</span>
                </a>
              </li>
              <li>
                <a
                  className={style("en")}
                  onClick={() => handleLocaleChange("en")}
                >
                  <Image src={EnglishFlag.src} width="30px" height="20px" />
                  <span className="hidden lg:inline ml-[6px]">English</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
