import { moduleCss } from 'helpers/functions';
import styleSponsor from './sponsor.module.scss';
import ImgFrame from '../../../public/images/gostream.png';
import ImgAlertLab from '../../../public/images/Alert_Labs_Logo.png';
import ImgRazorpay from '../../../public/images/razorpay-logo1.png';
const style = moduleCss(styleSponsor);
import { useTranslation } from "next-i18next";

const Sponsor = () => {
  const { t } = useTranslation("about-us");
  return (
    <div className={'w-full flex justify-center py-[80px] mt-[80px]'  +
    style('sponsor-block')}>
    <div
      className={
        'lg:grid lg:grid-cols-4 lg:gap-4 text-center max-w-[1440px]'
      }
    >
      <div
        className={
          'text-center text-[22px] font-bold font-[Quicksand] leading-[140%] opacity-50'
        }
      >
        {t("sponsors")}
      </div>
      <div
        className={
          'flex lg:col-span-3 lg:grid lg:grid-cols-3 lg:gap-3 lg:place-items-center lg:mt-0 flex-col items-center justify-center mt-[48px]'
        }
      >
        <a href="https://gostream.co" target="_blank" rel="noopener noreferrer"><img className={'w-[156px]'} src={ImgFrame.src} /></a>
      </div>
    </div>
    </div>
  );
};

export default Sponsor;
