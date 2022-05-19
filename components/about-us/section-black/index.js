import { moduleCss } from 'helpers/functions';
import styleSectionBlack from './section-black.module.scss';
import ImgBlockAboutUs from '../../../public/images/Rectangle1335.png';
import Image from 'next/image';
const style = moduleCss(styleSectionBlack);

const SectionBlack = ({ isFirst }) => {
  return (
    <div
      className={
        'lg:mt-[80px] lg:px-[100px] lg:py[100px] lg:flex lg:justify-between lg:flex-row-reverse mt-[48px] px-[20px] py-[64px] ' +
        style('block-about-us')
      }
    >
      <div className={"lg:w-[604px]"}>
        <div
          className={
            'lg:block lg:text-[48px] lg:leading-[110%] lg:w-[600px] font-[Quicksand] font-semibold hidden'
          }
        >
          <span className={isFirst && style('cl-linear2')}>Lorem ipsum </span>
          dolor sit amet, consectetur adipiscing elit.
        </div>
        <div
          className={
            'lg:hidden font-[Quicksand] leading-[140%] font-semibold text-[22px]'
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div
          className={
            'lg:mt-[32px] mt-[12px] leading-[150%] opacity-70 text-[18px]'
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
      {/* <img
        className={'lg:w-[498px] lg:mt-0 lg:mr-[5%] mt-[24px]'}
        src={ImgBlockAboutUs.src}
      /> */}
      <div className={'lg:w-[498px] lg:mt-0 lg:mr-[5%] mt-[24px]'}>
        <Image src={ImgBlockAboutUs} layout="responsive" />
      </div>
    </div>
  );
};

export default SectionBlack;
