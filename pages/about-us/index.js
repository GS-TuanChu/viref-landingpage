import { moduleCss } from 'helpers/functions';
import styleAboutUs from './about-us.module.scss';
import ImgAboutUs2 from '../../public/images/Rectangle1336.png';
import ImgAva from '../../public/images/Rectangle147.png';
import ImgAva1 from '../../public/images/Rectangle148.png';
import Layout from 'components/layout';
import SectionWhite from 'components/about-us/section-white';
import SectionBlack from 'components/about-us/section-black';
import DevelopmentRoadmap from 'components/about-us/development-roadmap';
import DevelopmentTeam from 'components/about-us/development-team';
import CustomSwiper, { Developer } from 'components/about-us/custom-swiper';
import Sponsor from 'components/about-us/sponsor';
import Image from 'next/image';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['homepage', 'about-us'])),
    }
  }
}

const style = moduleCss(styleAboutUs);

const DATA_DEVELOPER = [
  {
    ava: ImgAva,
    name: 'Nghiêm Tiến Viễn',
    des: 'Điều hành chung',
  },
  {
    ava: ImgAva1,
    name: 'ViNet Channel',
    des: 'Telegram',
  },
  {
    ava: ImgAva,
    name: 'hi@vinet.co',
    des: 'Địa chỉ email',
  },
  {
    ava: ImgAva1,
    name: 'ViNet Channel',
    des: 'Telegram',
  },
  {
    ava: ImgAva,
    name: 'hi@vinet.co',
    des: 'Địa chỉ email',
  },
  {
    ava: ImgAva1,
    name: 'ViNet Channel',
    des: 'Telegram',
  },
  {
    ava: ImgAva,
    name: 'hi@vinet.co',
    des: 'Địa chỉ email',
  },
];

const DATA_BLOCKCHAIN = [
  {
    ava: ImgAva,
    name: 'Nghiêm Tiến Viễn',
    des: 'Điều hành chung',
  },
  {
    ava: ImgAva1,
    name: 'ViNet Channel',
    des: 'Telegram',
  },
];

export default function AboutUs() {
  return (
    <Layout
      mainComp={
        <div className={'flex flex-col items-center' + style('bg contact-us')}>
          <div className='lg:max-w-[1440px] w-full'>
            <div
              className={
                'lg:mt-[200px] lg:flex lg:justify-center lg:text-[80px] font-[Quicksand] font-semibold lg:leading-[96%] text-[38px] mt-[128px] px-[20px]'
              }
            >
              Về
              <span className={'lg:ml-[10px] ml-[5px]' + style('cl-linear3')}>
                ViNet
              </span>
            </div>
            <div
              className={
                'lg:mt-[32px] lg:flex lg:justify-center lg:text-[22px] lg:leading-[150%] lg:opacity-70 text-[16px] leading-[140%] opacity-60 mt-[24px] px-[20px]'
              }
            >
              ViNet - Hệ sinh thái tiếp thị, phân phối
            </div>
            <SectionWhite isFirst={true} />
            <SectionBlack isFirst={true} />
            <SectionWhite />
            <DevelopmentRoadmap />

            <div
              className={
                'lg:flex lg:items-center lg:justify-between lg:mt-[64px] lg:px-[100px] hidden'
              }
            >
              <div className={'lg:mr-[5%] lg:w-[600px]'}>
                <div
                  className={
                    'text-[16px] opacity-40 leading-[140%] font-extrabold'
                  }
                >
                  Khởi đầu
                </div>
                <div
                  className={
                    'font-semibold font-[Quicksand] lg:leading-[110%] mt-[32px] text-[32px]'
                  }
                >
                  Ra mắt ViNet App tại Việt nam
                </div>
                <div
                  className={'mt-[24px] text-[18px] lg:leading-[150%] opacity-70'}
                >
                  ViNet phát hành token riêng trên hệ thống Blockchain, đặt tên là
                  VREF. Người dùng của ViNet khi sử dụng ứng dụng để nhận hoàn tiền
                  (cash back) hay nhận hoa hồng giới thiệu, họ có thể lựa.
                </div>
              </div>
              <div className={'w-[498px]'}>
                <Image src={ImgAboutUs2} layout="responsive" />

              </div>
            </div>
            <DevelopmentTeam data={DATA_DEVELOPER} />

            <div
              className={
                'lg:text-[48px] lg:leading-[110%] mt-[80px] text-[38px] px-[20px] text-center font-semibold font-[Quicksand]'
              }
            >
              Cố vấn Blockchain
            </div>
            <div
              className={'lg:grid lg:grid-cols-4 lg:gap-4 lg:gap-y-[80px] hidden'}
            ></div>
            <div
              className={
                'lg:flex lg:flex-wrap lg:justify-center mt-[80px] hidden'
              }
            >
              {DATA_BLOCKCHAIN.map((developer, index) => (
                <div key={index} className='w-[20%] m-[1%]'>
                  <Developer data={developer} />
                </div>
              ))}
            </div>
            <CustomSwiper data={DATA_BLOCKCHAIN} />
          </div>
          <div className='w-full'>
            <Sponsor />
          </div>
        </div>
      }
    />
  );
}
