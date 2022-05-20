import { moduleCss } from 'helpers/functions';
import styleJoinUs from './join-us.module.scss';
import ImgIPhone from 'public/images/Group13.png';
import ImgGooglePlay from 'public/images/google-play.png';
import ImgAppStore from 'public/images/app-store.png';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

const style = moduleCss(styleJoinUs);
export default function JoinUs() {
  const { t } = useTranslation("contact-us");
  return (
    <div
      className={
        'flex flex-col items-center justify-center lg:mt-[180px] lg:mb-[120px] my-[80px] lg:flex-row-reverse' +
        style('join-us')
      }
    >
      <div className='lg:flex lg:flex-col lg:flex-start lg:relative lg:left-0 '>
        <div
          className={
            'lg:w-[400px] lg:text-left lg:text-[40px] font-semibold lg:mt-0 mt-[48px] font-[Quicksand] leading-[96%] text-center text-[38px]'
          }
        >
          {t("join")}
          <span className={'ml-[5px]' + style('cl-linear3')}>ViRef</span>
        </div>
        <div
          className={
            'lg:w-[500px] lg:text-left lg:mx-0 lg:text-[18px] lg:leading-[150%] lg:opacity-70 mt-[24px] mx-[20px] text-[16px] opacity-80 leading-[140%] text-center'
          }
        >
          {t("footer")}
        </div>
        <div className='lg:flex lg:mt-[33px] hidden'>
          <a href="https://play.google.com/store/apps/details?id=godream.vn.vinet">
            <img className={'w-[175px] mr-[32px]'} src={ImgGooglePlay.src} />
          </a>
          <a href="https://apps.apple.com/vn/app/viref/id1604803348">
            <img className={'w-[175px]'} src={ImgAppStore.src} />
          </a>
        </div>
      </div>
      <button className={'lg:hidden mt-[24px]' + style('btn btn-join-now')}>
        Tham gia ngay
      </button>
      <img
        className={
          'lg:mr-[5%] lg:mt-[48px] lg:mb-[102px] lg:w-[325px] mt-[63px] w-[260px]'
        }
        src={ImgIPhone.src}
      />
    </div>
  );
}
