import { moduleCss } from 'helpers/functions';
import styleFormContactUs from './form-contact-us.module.scss';
import ImgVector from '../../../public/images/Vector11.png';

const style = moduleCss(styleFormContactUs);
const FormContactUs = () => {
  return (
    <div className='lg:mt-[116px] flex flex-col items-center justify-center mt-[80px]'>
      <div>
        <div
          className={
            'lg:text-[48px] font-[Quicksand] lg:leading-[110%] lg:font-semibold text-center text-[38px] font-semibold'
          }
        >
          Đăng ký bán hàng
        </div>
        <div className='flex lg:justify-end justify-center'>
          <img
            className={'lg:mt[12px] mt-[16px] w-[238px] h-[21px]'}
            src={ImgVector.src}
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full lg:w-auto lg:flex-row lg:mt-[67px]'>
        <div className='lg:w-[498px] w-full lg:mr-[32px]'>
          <div className={'lg:mt-0 mt-[42px]' + style('input-custom')}>
            <label className={style('label-input')}>Họ và tên</label>
            <input className={style('input-text')} />
          </div>
          <div className={'lg:mt-[32px] mt-[42px]' + style('input-custom')}>
            <label className={style('label-input')}>Số điện thoại</label>
            <input className={style('input-text')} />
          </div>
          <div className={'lg:mt-[32px] mt-[42px]' + style('input-custom')}>
            <label className={style('label-input')}>Email</label>
            <input className={style('input-text')} />
          </div>
          <div className={'lg:mt-[32px] mt-[42px]' + style('input-custom')}>
            <label className={style('label-input')}>Lĩnh vực kinh doanh</label>
            <select
              className={style('input-text select-custom')}
              name='department'
              id='department'
              placeholder="Lĩnh vực của bạn"
              defaultValue={'DEFAULT'}
            >
              <option value='DEFAULT' disabled>
                Lĩnh vực của bạn
              </option>
            </select>
          </div>
        </div>
        <div className={'lg:mt-0 mt-[42px] lg:w-[498px] w-full' + style('input-custom')}>
          <label className={style('label-input')}>Nội dung tin nhắn</label>
          <textarea className={style('input-text input-text-area')}></textarea>
        </div>
      </div>
      <button className={'lg:mt-[48px] mt-[32px]' + style('btn btn-signup')}>
        Đăng ký
      </button>
    </div>
  );
};

export default FormContactUs;
