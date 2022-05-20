import { moduleCss } from 'helpers/functions';
import styleCss from './section3.module.scss';
import Image from 'next/image';
import GroupBg from 'public/images/section3/Group.png';
import GroupBgMobi from 'public/images/section3/GroupMobi.png';
import Vantk from 'public/images/section3/vantk.png';
import VantkMobi from 'public/images/section3/vantkMobi.png';
import CheckedLn from 'public/images/section3/checked-ln.png';
import Ellipse from 'public/images/section3/ellipse.png';
import ArrowRight from 'public/images/section3/arrow-right.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";

// Import Swiper styles
import "swiper/css";
import Link from 'next/link';

const style = moduleCss(styleCss);


function Cards3({ title, des }) {
    return (
        <div className={style('cards3')}>
            <div className={style('title')}>{title}</div>
            <div className={style('des')}>
                {des}
            </div>
        </div>
    )
}

function SwiperCardMobi() {
    const { t } = useTranslation("homepage");
    return (
        <div>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={12}
                observer={true}
                className={style('swiper')}
            >
                <SwiperSlide className={style('swiper-slide')}>
                    <Cards3 title={t("section3.card1.title")} des={t("section3.card1.des")} />
                </SwiperSlide>
                <SwiperSlide className={style('swiper-slide')}>
                    <Cards3 title={t("section3.card2.title")} des={t("section3.card2.des")} />
                </SwiperSlide>
                <SwiperSlide className={style('swiper-slide')}>
                    <Cards3 title={t("section3.card3.title")} des={t("section3.card3.des")} />
                </SwiperSlide>
                <SwiperSlide className={style('swiper-slide')}>
                    <Cards3 title={t("section3.card4.title")} des={t("section3.card4.des")} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default function Section3() {
    const { t } = useTranslation("homepage");
    return (
        <div className={'w-full flex justify-center' + style('section3 bg')}>
            <div className='w-full lg:max-w-[1440px] lg:w-[1440px]'>
                <div className='text-center text-[#FFFFFF] text-[48px] font-semibold mt-[120px]'>
                    {t("section3.title")}
                </div>
                {/* card desktop */}
                <div className='flex flex-col md:h-[796.19px] h-[268px] items-center mt-[54px] relative'>
                    <div className='flex justify-around w-full hidden md:flex'>
                        <Cards3 title={t("section3.card1.title")} des={t("section3.card1.des")} />
                        <Cards3 title={t("section3.card2.title")} des={t("section3.card2.des")} />
                    </div>
                    <div className='flex justify-between px-[100px] w-full mt-[52px] hidden md:flex'>
                        <Cards3 title={t("section3.card3.title")} des={t("section3.card3.des")} />
                        <Cards3 title={t("section3.card4.title")} des={t("section3.card4.des")} />
                    </div>
                    {/* group-img desktop */}
                    <div className={'w-[796.19px] h-[673.86px] absolute hidden md:flex'}>
                        <Image src={GroupBg} alt='Group' />
                    </div>
                    {/* group-img mobi */}
                    <div className={'h-[268px] w-full px-[20px] absolute md:hidden flex'}>
                        <Image src={GroupBgMobi} alt='Group' />
                    </div>
                </div>
                {/* swiper card mobi */}
                <div className='w-full mt-[48px] md:hidden'>
                    <SwiperCardMobi />
                </div>

                <div className='md:px-[100px] px-[20px] flex flex-wrap relative'>
                    <div className='lg:flex-1 grow'>
                        <div className={'text-[#FFFFFF] md:mt-[15%] mt-[92px] text-[48px] font-semibold'}>
                            {t("section3.about")} <span className='relative'>VREF<span className='absolute w-[122.34px] h-[64.78px] left-[-10px]'><Image src={Ellipse} alt='ellipse' /></span></span> Token
                        </div>
                        <div className='text-[18px] md:w-[605px] mt-[24px] text-[#FFFFFF] opacity-70 mb-[48px]'>
                        </div>
                        <div className='flex flex-wrap w-full'>
                            <div className='flex xl:flex-1 items-center mb-[24px]'>
                                <span className='mr-[12px] w-[24px] h-[24px]'><Image src={CheckedLn} alt='checked' /></span>
                                <span className='text-[#FFFFFF] text-[22px] font-semibold'>{t("section3.details.0")}</span>
                            </div>
                            <div className='flex xl:flex-1 items-center mb-[24px]'>
                                <span className='mr-[12px] w-[24px] h-[24px]'><Image src={CheckedLn} alt='checked' /></span>
                                <span className='text-[#FFFFFF] text-[22px] font-semibold'>{t("section3.details.1")}</span>
                            </div>
                        </div>s
                        <div className='flex flex-wrap w-full md:mt-[16px]'>
                            <div className='flex xl:flex-1 items-center mb-[24px]'>
                                <span className='mr-[12px] w-[24px] h-[24px]'><Image src={CheckedLn} alt='checked' /></span>
                                <span className='text-[#FFFFFF] text-[22px] font-semibold'>{t("section3.details.2")}</span>
                            </div>
                            <div className='flex xl:flex-1 items-center mb-[24px]'>
                                <span className='mr-[12px] w-[24px] h-[24px]'><Image src={CheckedLn} alt='checked' /></span>
                                <span className='text-[#FFFFFF] text-[22px] font-semibold'>{t("section3.details.3")}</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex-none md:h-[auto] h-[323.41px]'>
                        <div className='md:hidden mt-[30px]'>
                            <BtnMoreInfo />
                        </div>
                        <div className='w-full lg:w-[auto] w-[355px] h-[323.41px] lg:h-[480.6px] lg:flex hidden'>
                            <Image src={Vantk} alt='van' />
                        </div>
                        <div className='lg:hidden absolute right-[0%] bottom-[6%]'>
                            <Image src={VantkMobi} alt='van' width={'335px'} height={'323.41px'} />
                        </div>
                    </div>
                </div>
                <div className={'pb-[128px] md:px-[100px] px-[20px] md:mt-[48px] md:flex hidden'}>
                    <BtnMoreInfo />
                </div>
            </div>

        </div>
    );
}

function BtnMoreInfo() {
    const { t } = useTranslation("homepage");
    return (
        <span className={'font-semibold text-[22px] whitespace-nowrap' + style('cl-linear2')}>
            <a href='https://whitepaper.viref.net/blog/vi/nen-kinh-te-token-cua-viref-p3' target="_blank" rel="noopener noreferrer">
                {t("section3.learnmore")}
                <span className='lg:ml-[24px] ml-[21px]'>
                    <Image src={ArrowRight} alt='arrow' height={'11.43px'} width={'8px'} />
                </span>
            </a>
        </span>
    )
}