import React from 'react'

import { FaHandshake } from "react-icons/fa6";
import Profile1 from '../assets/pxfuel (1).jpg'
import Profile2 from '../assets/pxfuel (3).jpg'
import Profile3 from '../assets/pxfuel (4).jpg'
import { FiPlus } from "react-icons/fi";
import Cardsimg1 from '../assets/sssss.jpg'
import Cardsimg2 from '../assets/eeeeeeeee.jpg'
import { FaPhone } from "react-icons/fa6";

function Donedeal() {
    return (
        <div>

            <div className='done-deal-section' >
                <div className='container done-deal-container'>
                    <div className='abt-line-div'></div>
                    <h1 className='abt-heading'>ABOUT US </h1>

                    <div className='deal-done-content-container'>
                        {/* container1 */}
                        <div className='deal-done-content-section1'>
                            <div className='deal-cont-container'>
                                <p className='deal-done-heading'>Transction  <br /> management <br /> reimagined</p>
                                <p className='deal-para'>Finding a property has never been easy till date. we fullfill all <br />
                                    your property requireds
                                </p>
                            </div>
                            {/* handshake-icons  */}
                            <div>
                                <FaHandshake className='hande-shake-icons' />
                            </div>
                            {/* counting */}
                            <div className='count-profile'>
                                <div className='done-deal-count'>
                                    <p className='count-item'>988+</p>
                                    <p className='deal-para'>Done Deals</p>
                                </div>
                                <div className='straight-div'>.</div>
                                <div className='done-deal-profile'>
                                    <div className='img-profile'>
                                        <img className='profile-img1' src={Profile1} alt="" />
                                        <img className='profile-img1' src={Profile2} alt="" />
                                        <img className='profile-img1' src={Profile3} alt="" />
                                        <FiPlus className='empy-plus1' />
                                    </div>
                                </div>

                            </div>

                        </div>
                        {/* container2  */}
                        <div className='deal-done-content-section2'>
                            <div className='sec-profile-container'>
                                <div className='sec-profile-section1'>
                                    <img className='card-pro' src={Cardsimg1} alt="" />
                                    <div className="post-cards">
                                        <p className='sold-para'>SOLD FOR</p>
                                        <p className='RM-para'>RM 1.0 Million</p>
                                        <p className='land-size'>(RM667 psf Against land size)</p>
                                    </div>
                                </div>
                            </div>
                            {/* sec-section-card  */}
                            <div className="sec-profile-container1">
                                <div className="sec-profile-section2">
                                    <img className='card-pro1' src={Cardsimg2} alt="" />
                                    <div className='black-container'>.</div>
                                    <div className='black-container1'>
                                        <div>
                                            <p className='post-inside-content'>Two-storey <br />
                                                Terraced House at</p>
                                            <p className='post-inside-content'>Ara Damansra, selanger</p>
                                        </div>
                                        <div className='card-content-sec'>
                                            <img className='profile-img2' src={Profile1} alt="" />

                                            <div className='phn-content'>
                                                <p className='deal-para'>Shah Alam</p>
                                                <p className='deal-para'>   <FaPhone className='phone-icons' />  +154 548 5444</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-cards1">
                                        <p className='sold-para'>SOLD FOR</p>
                                        <p className='RM-para'>RM 1.0 Million</p>
                                        <p className='land-size'>(RM667 psf Against land size)</p>
                                    </div>
                                </div>
                                {/* card3  */}
                                {/* <div className='sec-profile-section3'> 
                                    
                                    c
                                </div> */}
                            </div>



                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Donedeal