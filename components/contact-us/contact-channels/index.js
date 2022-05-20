import { moduleCss } from 'helpers/functions';
import styleContactChannels from './contact-channels.module.scss';
import ImgPhone from '../../../public/images/phone-call1.png';
import ImgTelegram from '../../../public/images/telegram1.png';
import ImgMailBox from '../../../public/images/mail-box1.png';
import Image from 'next/image';
import { useTranslation } from "next-i18next";

const style = moduleCss(styleContactChannels);

const DATA_CONTACT = [
  {
    icon: ImgPhone,
    title: '1900277255',
    link: 'tel:1900277255',
    des: 'Hotline',
    color: false,
    mr: 'lg:mr-[32px]'
  },
  {
    icon: ImgTelegram,
    title: 'ViRef Channel',
    link: 'https://t.me/ViRefOfficial',
    title2: 'ViRef Group',
    link2: 'https://t.me/+e8w0hTxFdkg5MDQ9',
    des: 'Telegram',
    color: true,
    mr: 'lg:mr-[32px]'
  },
  {
    icon: ImgMailBox,
    title: 'hi@viref.net',
    link: 'email:hi@viref.net',
    des: 'Email',
    color: false,
    mr: 'lg:mr-[0px]'
  },
];

export const Contact = ({ data }) => {

  return (
    <div
      className={
        `lg:w-[392px] lg:h-[374px] ${data.mr} flex flex-col items-center justify-center mb-[24px]` +
        style('box-contact')
      }
    >
      <div className={style('img-contact')}>
        <Image src={data.icon} layout="responsive" />
      </div>
      <a href={data.link}>
        <div
          className={
            data.title2
              ? style('text-box-contact color-link')
              : style('text-box-contact') + 'mt-[20px]'
          }
        >
          {data.title}
        </div>
      </a>

      <a href={data.link2}>
        <div
          className={
            data.title2
              ? style('text-box-contact color-link')
              : style('text-box-contact') + `mt-[8px] ${!data.title2 && 'hidden'}`
          }
        >
          {data.title2}
        </div>
      </a>

      <div
        className={'lg:opacity-[70] mt-[8px]' + style('sub-text-box-contact')}
      >
        {data.des}
      </div>
    </div>
  );
};

const ContactChannel = () => {
  const { t } = useTranslation("contact-us");
  return (
    <>
      <div
        className={
          'lg:text-[80px] lg:font-semibold lg:leading-[96%] font-[Quicksand] text-[38px] text-center my-[48px]'
        }
      >
        {t("contact")}
        <span className={'ml-[5px]' + style('cl-linear3')}>ViRef</span>
      </div>
      <div className='lg:block lg:text-[22px] lg:mt-[32px] lg:leading-[150%] lg:opacity-70 text-[#061D27] text-center hidden'>
        {t("help")}
      </div>
      <div className='lg:flex lg:justify-between lg:mt-[80px] lg:w-full '>
        {DATA_CONTACT.map((contact, index) => (
          <Contact data={contact} key={index} />
        ))}
      </div>
    </>
  );
};

export default ContactChannel;
