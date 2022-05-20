import { useState, useRef } from "react";
import { moduleCss } from "helpers/functions";
import styleCss from "./index.module.scss";
import VietNamFlag from "public/images/vietnam-flag.png";
import EnglishFlag from "public/images/uk-flag.jpeg";
import DownArrowImg from "public/images/drop-down.png";
import { useOnClickOutside } from "hooks/hooks";
import Image from "next/image";
import { useRouter } from "next/router";

const style = moduleCss(styleCss);

export default function ChooseLanguage() {
  const ref = useRef();
  const [language, setLanguage] = useState({
    name: "Tiếng Việt",
    img: VietNamFlag,
  });
  const [showUl, setShowUl] = useState(false);
  useOnClickOutside(ref, () => setShowUl(false));
  const router = useRouter();
  const { locale } = useRouter();
  const handleLocaleChange = (event, value) => {
    event.preventDefault()
    if (value === "en" || locale === "en") setLanguage({ name: "English", img: EnglishFlag });
    if (value === "vi" || locale === "vi") setLanguage({ name: "Tiếng Việt", img: VietNamFlag });
    router.push(router.route, router.asPath, {
      locale: value,
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
                  onClick={(_) => handleLocaleChange(event, "vi")}
                >
                  <Image src={VietNamFlag.src} width="30px" height="20px" />
                  <span className="hidden lg:inline ml-[6px]">Tiếng Việt</span>
                </a>
              </li>
              <li>
                <a
                  className={style("en")}
                  onClick={(_) => handleLocaleChange(event, "en")}
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
