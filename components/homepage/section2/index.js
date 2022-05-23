import { moduleCss } from 'helpers/functions';
import styleCss from './section2.module.scss';
import Image from 'next/image';

import Phone from 'public/images/section2/phone.png';
import PhoneMobi from 'public/images/section2/phoneMobi.png';
import Item1 from 'public/images/section2/item1.png';
import Item2 from 'public/images/section2/item2.png';
import Item3 from 'public/images/section2/item3.png';
import Checked from 'public/images/section2/checked.png';
import Advertising from 'public/images/section2/advertising 1.png';
import MoneyBag from 'public/images/section2/money-bag 1.png';
import Chat from 'public/images/section2/chat 1.png';
import Search from 'public/images/section2/search 1.png';
import LineHorizontal from 'public/images/section2/line-horizontal.svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";

// Import Swiper styles
import "swiper/css";

const style = moduleCss(styleCss);

const DATA_CARD = [
    {
        id: '01',
        icon: Advertising,
    },
    {
        id: '02',
        icon: MoneyBag,
    },
    {
        id: '03',
        icon: Chat,
    },
    {
        id: '04',
        icon: Search,
    }
]

function BaseCard(props) {
    const { t } = useTranslation("homepage");
    const { index, data } = props
    return (<div className={style('card-action') + 'mt-[24px]'}>
        <span className={'text-[48px] font-semibold' + style('cl-linear2')}>{data?.id}</span>
        <div className='sm:w-[100px] w-[80px] h-[80px] sm:h-[100px] sm:my-[24px]'>
            <Image src={data?.icon} alt='item card' />
        </div>
        <div className={'sm:text-[22px] text-[20px] font-semibold sm:whitespace-pre-line'}>
            {t(`section2.works.${index}.title`)}
        </div>
        <div className={'sm:text-[18px] text-[16px] text-[#061D27] opacity-70 sm:mt-[16px] mt-[12px]'}>
            {t(`section2.works.${index}.des`)}
        </div>
    </div>)
}

function Card(props) {
    if (props?.isMobile) {
        return (
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={12}
                observer={true}
                className={style('swiper')}
            >
                {
                    DATA_CARD.map((item, index) => (
                        <SwiperSlide className={style('swiper-slide')} key={index}>
                            <BaseCard index={index} data={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )
    }
    return (
        DATA_CARD.map((item, index) => (
            <BaseCard index={index} data={item} key={index} />
        ))
    )
}

export default function Section2() {
    const { t, i18n } = useTranslation("homepage");
    return (
        <div className={'flex justify-center' + style('bg section2')}>
            <div className='w-full lg:max-w-[1440px] lg:w-[1440px] lg:px-[100px] px-[20px] pb-[150px]'>
                <div className={'md:pt-[120px] pt-[100px] text-center md:text-[48px] text-[38px] text-[#061D27] font-semibold md:whitespace-normal whitespace-pre-line leading-[100%]'}>
                    {i18n.language === "vi" ? <>
                        {t('section2.eco1')} {'\n'} <span className={style('cl-linear3')}> {t('section2.eco2')} </span>
                    </> : <>
                        <span className={style('cl-linear3')}> {t('section2.eco1')} </span> {t('section2.eco2')} {'\n'}
                    </>}
                    {t('section2.eco3')}
                </div>

                <div className={'flex justify-center lg:mt-[52px] mt-[120px] relative'}>
                    <div className={'absolute lg:top-[6%] lg:left-[19%] top-[-20%] left-[2%] lg:w-[268px] lg:h-[268px] w-[191px] h-[188px] rounded-[20px] bg-[#FFFFFF] z-10' + style('box-sd')}>
                        <div className={'flex flex-col lg:p-[24px] p-[16px]'}>
                            <div className='lg:w-[47.85px] lg:h-[48px] w-[39.89px] h-[40px]'>
                                <Image src={Item1} alt='giỏ hàng' />
                            </div>
                            <div className='font-bold lg:text-[22px] text-[16px] pt-[8px]'>
                                {t('section2.buyer.title')}
                            </div>
                            <div className='flex lg:mt-[24px] mt-[10px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' layout="intrinsic" />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>{t('section2.buyer.sub1')}</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' layout="intrinsic"/>
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>{t('section2.buyer.sub2')}</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' layout="intrinsic"/>
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>{t('section2.buyer.sub3')}</div>
                            </div>
                        </div>
                    </div>

                    <div className={'absolute lg:top-[30%] lg:right-[12.8%] right-[1%] top-[27%]  lg:w-[342px] lg:h-[268px] w-[191px] h-[248px] rounded-[20px] bg-[#FFFFFF] z-10' + style('box-sd')}>
                        <div className={'flex flex-col lg:p-[24px] p-[16px]'}>
                            <div className='lg:w-[47.85px] lg:h-[48px] w-[39.89px] h-[40px]'>
                                <Image src={Item2} alt='giỏ hàng' />
                            </div>
                            <div className='font-bold lg:text-[22px] text-[16px] pt-[8px]'>
                                {t('section2.producer.title')}
                            </div>
                            <div className='flex lg:mt-[24px] mt-[10px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' layout="intrinsic"/>
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>{t('section2.producer.sub1')}</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' layout="intrinsic"/>
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>{t('section2.producer.sub2')}</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' layout="intrinsic"/>
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>{t('section2.producer.sub3')}</div>
                            </div>
                        </div>
                    </div>

                    <div className={'lg:w-[818.74px] lg:h-[886.54px] lg:block hidden'}>
                        <Image src={Phone} alt='ViRef App' />
                    </div>

                    <div className={'w-[247.37px] lg:h-[500px] lg:hidden block'}>
                        <Image src={PhoneMobi} alt='ViRef App' />
                    </div>

                    <div className={'absolute lg:bottom-[0%] lg:left-[27%] bottom-[-30%] left-[5%] lg:w-[342px] lg:h-[268px] w-[220px] h-[208px] rounded-[20px] bg-[#FFFFFF] z-10' + style('box-sd')}>
                        <div className={'flex flex-col lg:p-[24px] p-[16px]'}>
                            <div className='lg:w-[47.85px] lg:h-[48px] w-[39.89px] h-[40px]'>
                                <Image src={Item3} alt='giỏ hàng' />
                            </div>
                            <div className='font-bold lg:text-[22px] text-[16px] pt-[8px]'>
                                {t('section2.referrers.title')}
                            </div>
                            <div className='flex lg:mt-[24px] mt-[10px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' layout="intrinsic"/>
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>{t('section2.referrers.sub1')}</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' layout="intrinsic" />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>{t('section2.referrers.sub2')}</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' layout="intrinsic" />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>{t('section2.referrers.sub3')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-[48px] font-semibold text-center lg:mt-[126px] mt-[226px]'>
                    {
                        i18n.language === "vi" ?
                            <><span className={style('cl-linear3')}>ViRef</span> App hoạt động như thế nào?</> :
                            <>How does <span className={style('cl-linear3')}>ViRef</span>  App work?</>
                    }
                    <div>
                        <Image src={LineHorizontal} alt='line horizontal' />
                    </div>
                </div>
                {/* {desktop} */}
                <div className='flex flex-wrap justify-around mt-[100px] hidden sm:flex'>
                    <Card />
                </div>
                {/* {mobile} */}
                <div className='w-full sm:hidden mt-[81px]'>
                    <Card isMobile={true} />
                </div>
            </div>
        </div>
    );
}