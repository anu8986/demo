import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

function Lastaddress() {
  return (
    <div>
         <div className='last-section'>
            <div className="container last-content-container">
                <div className='last-content'>
                    <h5>TechREalTors</h5>
                    <p className='last-address'>Suite 609 Block A (Lobby Lift 3), Damasara Intan Business Center, <br />
                        Jalan SS20/27, 47400 Petaling Jaya, Selangor Darul Ehsan
                    </p>
                    <div className='contact-last-container'>
                        <p className='last-address'>Tel: +603 7729 9999 | Fax: +603 7722 5189</p>
                        <p className='last-address'>Email: techrealtors@gmail.com</p>
                    </div>
                    <p className='last-address'>©2021 TechRealtors Properties Sdn Bhd. All rights reserved.</p>
                </div>
                <div className='last-icons-content'>
                 
                        <FaFacebook className='last-cont-icons'/>
                        <LuInstagram className='last-cont-icons'/>
                        <IoLogoYoutube className='last-cont-icons'/>
                        <IoLogoLinkedin className='last-cont-icons'/>
                        <FaTwitter className='last-cont-icons'/>
                    

                </div>
            </div>
        </div>

    </div>
  )
}

export default Lastaddress