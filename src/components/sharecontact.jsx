import React from 'react'
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FiYoutube } from "react-icons/fi";

const Sharecontact = () => {
    return (
        <div>
            <div className='share-icons-map'>

                <RiFacebookCircleLine className='share-icons' />
                <BsInstagram className='share-icons1' />
                <FaLinkedinIn className='share-icons2' />
                <TiSocialTwitterCircular className='share-icons3' />
                <FiYoutube className='share-icons' />

            </div>
        </div>
    )
}

export default Sharecontact