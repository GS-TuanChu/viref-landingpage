import { useEffect, useState } from "react";
import { moduleCss } from "helpers/functions";
import styleCss from "./header.module.scss";
import Link from "next/link";
import Logo from "public/images/logo-viref.png";
import MenuItems from "public/images/menu-3 2.png";
import { NavigationModal } from "./navigation-modal";
import { useRouter } from "next/router";
import Image from "next/image";
import ChooseLanguage from "./choose-language";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "section0"])),
  },
});

const style = moduleCss(styleCss);
let lastScrollTop = 0;
export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [isModal, setOpentModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = (_) => {
      lastScrollTop = scrollTop;
      setScrollTop(window.pageYOffset >= 0 ? window.pageYOffset : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const handleClose = () => {
    setOpentModal(false);
  };
  const { t } = useTranslation("section0");

  return (
    <>
      <div
        className={`${style(
          "header"
        )} fixed w-full h-[80px] top-0 z-[999] flex items-center px-[20px] justify-between 
                lg:h-[100px] lg:px-[100px]
                ${scrollTop > lastScrollTop ? style("hidden-header") : ""}`}
      >
        <Link passHref href="/">
          <img src={Logo.src} height="48" className={style("img-logo")} />
        </Link>
        <img
          onClick={(_) => setOpentModal(true)}
          className="menu-items cursor-pointer lg:hidden"
          src={MenuItems.src}
          width="26px"
          height="26px"
        />
        <ul className={"flex justify-start grow" + style("nav")}>
          <li className={router.pathname == "/" ? "font-bold" : ""}>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="https://exchange.viref.net">{t("transaction")}</Link>
          </li>
          {/*<li className={router.pathname == "/contact-us" ? "font-bold" : ""}>
                        <Link href="/contact-us">Liên Hệ</Link>
                    </li>
                    <li className={router.pathname == "/about-us" ? "font-bold" : ""}>
                        <Link href="/about-us">Về Chúng Tôi</Link>
                    </li>*/}
          <li>
            <a
              href="https://whitepaper.viref.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
          </li>
        </ul>
        <div className="hidden lg:block">{<ChooseLanguage />}</div>
      </div>
      {isModal && <NavigationModal handleClose={handleClose} />}
    </>
  );
}
// <li className={router.pathname == "/blogs" || router.pathname == "/blogs/acticle-detail" ? "font-bold" : ""}>
//     <Link href="/blogs">Blogs</Link>
// </li>
