import { moduleCss } from 'helpers/functions';
import styleCss from './footer.module.scss';
import Link from 'next/link';
import Logo from 'public/images/logo-viref-white.png';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const style = moduleCss(styleCss);

export default function Footer() {
    const { t } = useTranslation('homepage')
    return (
        <>
        <div className={"lg:flex lg:justify-between bg-[#09171E] px-[20px] lg:px-[100px]" + style('footer')}>
            <div className="lg:w-[498px]">
                <Link passHref href="/">
                    <img src={Logo.src} height="48" className={style('img-logo')} />
                </Link>
                <div className="mt-[40px] lg:block hidden cl-linear2">
                    {t(`section1.title`)}
                </div>
                <div className={"pt-[24px] pb-[40px] font-style-1 opacity-70"}>
                    {t("footer.description")}
                </div>
            </div>
            <div className={"flex lg:mt-[40px] lg:border-0" + style('footer-content')}>
                <ul className="flex-1 lg:mr-[100px]">
                    <li style={{opacity: 1}}><b>Menu</b></li>
                    <li>
                        <Link href="/">{t(`section0.home`)}</Link>
                    </li>
                    {/*<li>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Liên Hệ</Link>
                    </li>*/}
                    {/*<li>
                        <Link href="/about-us">Về Chúng Tôi</Link>
                    </li>*/}
                    <li>
                        <a href="https://whitepaper.viref.net/" target="_blank" rel="noopener noreferrer">Whitepaper</a>
                    </li>
                </ul>
                
                    <ul className="flex-1">
                        <li style={{opacity: 1}}><b>{t(`footer.contact`)}</b></li>
                        <li><a href="tel:1900277255">1900-277255</a></li>
                        <li><a href="email:hi@viref.net">hi@viref.net</a></li>
                        <li className="cl-linear2">
                            <a href="https://t.me/+e8w0hTxFdkg5MDQ9" className="border-b">ViRef Group</a>
                        </li>
                        <li className="cl-linear2 w-[100px]">
                            <a href="https://t.me/ViRefOfficial" className="border-b">ViRef Channel</a>
                        </li>
                    </ul>
            </div>
            <div>
                <div className="hidden lg:block mt-[40px]">{t(`footer.social-network`)}</div>
                <ul className="flex mt-[20px] mb-[80px] opacity-70">
                    <li className="mr-[24px]">
                        <a href="https://www.facebook.com/ViRef.Net"><BsFacebook size="24px" fontWeight="bold" /></a>
                    </li>
                    {/*<li className="mr-[24px]">
                        <a href="#"><BsTwitter size="24px" fontWeight="bold" /></a>
                    </li>
                    <li className="mr-[24px]">
                        <a href="#"><BsInstagram size="24px" fontWeight="bold" /></a>
                    </li>
                    <li>
                        <a href="#"><BsLinkedin size="24px" fontWeight="bold" /></a>
                    </li>*/}
                </ul>
            </div>
        </div>
        </>
    )
}