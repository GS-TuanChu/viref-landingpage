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

// Import Swiper styles
import "swiper/css";


const style = moduleCss(styleCss);

const DATA_CARD = [
    {
        id: '01',
        icon: Advertising,
        title: 'Người Bán Tạo \n Chiến Dịch',
        des: 'Người bán quy định tổng quỹ thưởng và số tiền trả thưởng cho mỗi đơn hàng'
    },
    {
        id: '02',
        icon: MoneyBag,
        title: 'Khách Mua Hàng \n Nhận Hoàn Tiền',
        des: 'Khách mua hàng chỉ cần quét mã QR để nhận hoàn tiền'
    },
    {
        id: '03',
        icon: Chat,
        title: 'Giới Thiệu Thêm \n Khách Hàng Mới',
        des: 'Người giới thiệu nhận tiền hoa hồng một cách tự động mỗi khi có đơn hàng mới'
    },
    {
        id: '04',
        icon: Search,
        title: 'Tìm Và Bán Nhiều \n Sản Phẩm Khác',
        des: 'Chọn bán sản phẩm mà mình tự tin nhất trong ViRef để tăng thu nhập'
    }
]

function BaseCard(props) {
    return (<div className={style('card-action') + 'mt-[24px]'}>
        <span className={'text-[48px] font-semibold' + style('cl-linear2')}>{props?.data?.id}</span>
        <div className='sm:w-[100px] w-[80px] h-[80px] sm:h-[100px] sm:my-[24px]'>
            <Image src={props?.data?.icon} alt='item card' />
        </div>
        <div className={'sm:text-[22px] text-[20px] font-semibold sm:whitespace-pre-line'}>
            {props?.data?.title}
        </div>
        <div className={'sm:text-[18px] text-[16px] text-[#061D27] opacity-70 sm:mt-[16px] mt-[12px]'}>
            {props?.data?.des}
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
                            <BaseCard data={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )
    }
    return (
        DATA_CARD.map((item, index) => (
            <BaseCard data={item} key={index} />
        ))
    )
}


export default function Section2() {
    return (
        <div className={'flex justify-center' + style('bg section2')}>
            <div className='w-full lg:max-w-[1440px] lg:w-[1440px] lg:px-[100px] px-[20px] pb-[150px]'>
                <div className={'md:pt-[120px] pt-[100px] text-center md:text-[48px] text-[38px] text-[#061D27] font-semibold md:whitespace-normal whitespace-pre-line leading-[100%]'}>
                    Hệ sinh thái {`\n`}<span className={style('cl-linear3')}>ViRef</span> App
                </div>

                <div className={'flex justify-center lg:mt-[52px] mt-[120px] relative'}>
                    <div className={'absolute lg:top-[6%] lg:left-[19%] top-[-20%] left-[2%] lg:w-[268px] lg:h-[268px] w-[191px] h-[188px] rounded-[20px] bg-[#FFFFFF] z-10' + style('box-sd')}>
                        <div className={'flex flex-col lg:p-[24px] p-[16px]'}>
                            <div className='lg:w-[47.85px] lg:h-[48px] w-[39.89px] h-[40px]'>
                                <Image src={Item1} alt='giỏ hàng' />
                            </div>
                            <div className='font-bold lg:text-[22px] text-[16px] pt-[8px]'>
                                Người Mua Hàng
                            </div>
                            <div className='flex lg:mt-[24px] mt-[10px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>Nhận được hoàn tiền</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>Đảm bảo nguồn gốc</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>Review sản phẩm</div>
                            </div>
                        </div>
                    </div>

                    <div className={'absolute lg:top-[30%] lg:right-[12.8%] right-[1%] top-[27%]  lg:w-[342px] lg:h-[268px] w-[191px] h-[248px] rounded-[20px] bg-[#FFFFFF] z-10' + style('box-sd')}>
                        <div className={'flex flex-col lg:p-[24px] p-[16px]'}>
                            <div className='lg:w-[47.85px] lg:h-[48px] w-[39.89px] h-[40px]'>
                                <Image src={Item2} alt='giỏ hàng' />
                            </div>
                            <div className='font-bold lg:text-[22px] text-[16px] pt-[8px]'>
                                Nhà Sản Xuất
                            </div>
                            <div className='flex lg:mt-[24px] mt-[10px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>Tiết kiệm chi phí quảng cáo</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>Xây dựng mạng lưới bán hàng</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>Tạo lợi thế cạnh tranh</div>
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
                                Người Giới Thiệu
                            </div>
                            <div className='flex lg:mt-[24px] mt-[10px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>Nhận hoa hồng giới thiệu</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>Nhiều mặt hàng đa dạng</div>
                            </div>
                            <div className='flex lg:mt-[12px] mt-[8px]'>
                                <div className='lg:mr-[16px] mr-[8px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]'>
                                    <Image src={Checked} alt='checked' />
                                </div>
                                <div className='lg:text-[18px] text-[14px] text-[#061D27] opacity-80'>Làm chủ mạng lưới bán hàng</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-[48px] font-semibold text-center lg:mt-[126px] mt-[226px]'>
                    <span className={style('cl-linear3')}>ViRef</span> App hoạt động như thế nào?
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