import React, { useEffect, useRef } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import VietNamFlag from 'public/images/vietnam-flag.png';
import { moduleCss } from 'helpers/functions';
import styleCss from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import QrCodeImg from 'public/images/section0/qr-code.png';
import PhoneImge from 'public/images/section0/Group 13.png';

const style = moduleCss(styleCss);
const NavigationModal = ({ handleClose }) => {
    const modalRef = useRef();

    useEffect(() => {
        // only add the event listener when the dropdown is opened
        // if (!isModal) return;
        function handleClick(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose()
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <>
            <div className={`share-modal-wrapper`}>
                <div
                    className={"share-modal w-[816px] h-[445px] mx-[auto] my-[15%]" + style('bg-modal')}
                    ref={modalRef}
                >
                    <div className="header flex items-center justify-end px-[30px] h-[50px]">
                        <div
                            className={'mt-23px mb-[-15px]' + style('close-btn')}
                            onClick={handleClose}
                        >
                            <AiOutlineClose size="26px" fontWeight="bold" />
                        </div>
                    </div>
                    <div className="flex px-[60px] justify-between">
                        <div className="flex flex-col items-center">
                            <div className="text-[40px] font-semibold leading-[110%] mb-[32px]">
                                Tải ứng dụng <span className="cl-linear3">ViRef</span>
                            </div>
                            <Image src={QrCodeImg} width="212px" height="212" />
                            <div className="mt-[32px] mb-[50px] font-style-18 opacity-70">Quét QR để tải ứng dụng tiện dụng hơn</div>
                        </div>
                        <Image src={PhoneImge} width="282px" height="365px" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { NavigationModal }
