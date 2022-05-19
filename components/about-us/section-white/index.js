import { moduleCss } from 'helpers/functions';
import styleSectionWhite from './section-white.module.scss';
import ImgAboutUs from '../../../public/images/Rectangle.png';
import Image from 'next/image';
const style = moduleCss(styleSectionWhite);

const SectionWhite = ({ isFirst }) => {
  return (
    <div
      className={
        'lg:mt-[80px] lg:px-[100px] lg:flex lg:justify-betweenmt-[48px] text-[22px] px-[20px]'
      }
    >
      <div className={'lg:mr-[5%] lg:w-[604px]'}>
        <div
          className={
            'lg:block lg:text-[48px] lg:leading-[110%] lg:w-[425px] font-[Quicksand] font-semibold lg:mt-0 lg:px-0 hidden'
          }
        >
          <span className={isFirst && style('cl-linear3')}>ViRef</span> bắt đầu
          như thế nào?
        </div>
        <div
          className={
            'lg:hidden mt-[48px] font-[Quicksand] leading-[140%] font-semibold text-[22px]'
          }
        >
          ViRef bắt đầu như thế nào?
        </div>
        <div
          className={
            'lg:p-0 lg:mt-[32px] mt-[12px] leading-[150%] opacity-70 text-[18px]'
          }
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo
            nec eu a tellus massa sem egestas. Bibendum augue mi nullam egestas.
            Mauris eu, risus adipiscing sed dui vulputate. Amet laoreet sit
            tellus tristique tellus porttitor euismod tincidunt. Volutpat tellus
            urna, sed nec, sit urna morbi. Ornare ipsum in rutrum purus
            fringilla penatibus vitae nisl. Diam non et vel enim lorem
            elementum.
          </p>
          <br />
          <p>
            Pellentesque at diam convallis nibh tincidunt et ultrices nunc,
            aliquet. Turpis sed imperdiet condimentum ac cursus. Nisi eros,
            nunc, pulvinar viverra velit porta. Aliquam scelerisque eu at
            consequat.
          </p>
        </div>
      </div>
      <div className={'lg:w-[498px] lg:h-[498px] lg:mt-0 lg:px-0 mt-[24px]'}>
        <Image src={ImgAboutUs} layout="responsive" />
      </div>
    </div>
  );
};

export default SectionWhite;
