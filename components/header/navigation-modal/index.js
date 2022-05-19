import React, { useEffect, useRef } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import VietNamFlag from 'public/images/vietnam-flag.png';
import { moduleCss } from 'helpers/functions';
import styleCss from './index.module.scss';
import Link from 'next/link';
import ChooseLanguage from '../choose-language';

const style = moduleCss(styleCss);
const NavigationModal = ({ handleClose }) => {
    const modalRef = useRef();

    // useEffect(() => {
    //     // only add the event listener when the dropdown is opened
    //     // if (!isModal) return;
    //     function handleClick(event) {
    //         if (modalRef.current && !modalRef.current.contains(event.target)) {
    //             handleClose()
    //         }
    //     }
    //     window.addEventListener("click", handleClick);
    //     // clean up
    //     return () => window.removeEventListener("click", handleClick);
    // }, []);

    return (
        <>
            <div className={`share-modal-wrapper`}>
                <div
                    className="share-modal w-full h-full absolute bottom-0 bg-[white]"
                    ref={modalRef}
                >
                    <div className="header flex items-center justify-between px-[30px] h-[80px]">
                        <div>
                            <ChooseLanguage />
                        </div>
                        <div
                            className="close-btn"
                            onClick={handleClose}
                        >
                            <AiOutlineClose size="26px" fontWeight="bold" />
                        </div>
                    </div>
                    <div className="container-share mt-[32px] font-style-24">
                        <ul className={style('nav')}>
                        <li>
                            <Link href="/"><b>Trang Chủ</b></Link>
                        </li>
                        {/*<li>
                            <Link href="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Liên Hệ</Link>
                        </li>
                        <li>
                            <Link href="/about-us">Về Chúng Tôi</Link>
                        </li>*/}
                        <li>
                            <Link href="https://exchange.viref.net/" target="_blank" rel="noopener noreferrer">Giao dịch</Link>
                        </li>
                        <li>
                            <a href="https://whitepaper.viref.net/" target="_blank" rel="noopener noreferrer">Whitepaper</a>
                        </li>
                        </ul>
                    </div>
                    <div className="footer m-t-24 h-[113px]">
                        <div className={style('social-text')}>Theo dõi các kênh xã hội của ViRef:</div>
                        <ul className="flex mt-[20px]">
                            <li className="mr-[24px]"><BsFacebook size="24px" fontWeight="bold" /></li>
                            <li className="mr-[24px]"><BsTwitter size="24px" fontWeight="bold" /></li>
                            <li className="mr-[24px]"><BsInstagram size="24px" fontWeight="bold" /></li>
                            <li><BsLinkedin size="24px" fontWeight="bold" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export { NavigationModal }
