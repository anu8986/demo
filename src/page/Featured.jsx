import React from 'react'
import Featuredemp from '../assets/featured-img.jpg'
import Featuredemp2 from '../assets/featured-img2.jpg'
import Featuredemp3 from '../assets/featured-img3.jpg'
import Featuredemp4 from '../assets/featured-img4.jpg'
import Featuredemp5 from '../assets/featuredimhg5.jpg'
import { FaCircleDot } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

function Featured() {
    return (
        <div>

            <div className='container-fulid  profile-container-featured'>


                <div className="container profile-container-featured">
                    <div className='featured-top-heading-cotainer'>
                        <div>
                            <div className='abt-line-div'></div>
                            <h1 className='abt-heading'>ABOUT US </h1>
                            <p className='featured-para-sec'>Meet the opportunity to work to work  some of the top <br /> Real Estate Agents in town </p>
                        </div>
                        <div className='plus-icons-container'>
                            <FiPlus className='empy-plus' />
                            <p className='view-featured'>View all <br /><span className='view-all-agents'>Agents</span></p>
                        </div>
                    </div>
                    <div className="cards-container">
                        <div className="featured-cards">
                            <img className='img-profile-human' src={Featuredemp} alt="" />
                            <div className='featured-imgs-content'>
                                <div className='small-container-featured'>
                                    <p className='card-name'>sdasdasd</p>
                                </div>
                                <div className='featured-lg-container'>
                                    <div className='human-hotel-icons'>
                                        <IoIosContact className='human-icons1' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                    <div className='human-hotel-icons'>
                                        <MdContactMail className='human-icons' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                </div>
                                <div className='round-container'>
                                    <FaCircleDot className='round-icons' />
                                </div>
                            </div>
                        </div>
                        {/* crad2 */}
                        <div className="featured-cards">
                            <img className='img-profile-human' src={Featuredemp2} alt="" />
                            <div className='featured-imgs-content'>
                                <div className='small-container-featured'>
                                    <p className='card-name'>sdasdasd</p>
                                </div>
                                <div className='featured-lg-container'>
                                    <div className='human-hotel-icons'>
                                        <IoIosContact className='human-icons1' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                    <div className='human-hotel-icons'>
                                        <MdContactMail className='human-icons' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                </div>
                                <div className='round-container'>
                                    <FaCircleDot className='round-icons' />
                                </div>
                            </div>
                        </div>
                        {/* card3 */}

                        <div className="featured-cards">
                            <img className='img-profile-human' src={Featuredemp3} alt="" />
                            <div className='featured-imgs-content'>
                                <div className='small-container-featured'>
                                    <p className='card-name'>sdasdasd</p>
                                </div>
                                <div className='featured-lg-container'>
                                    <div className='human-hotel-icons'>
                                        <IoIosContact className='human-icons1' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                    <div className='human-hotel-icons'>
                                        <MdContactMail className='human-icons' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                </div>
                                <div className='round-container'>
                                    <FaCircleDot className='round-icons' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sec-cards1'>
                        <div className="featured-cards">
                            <img className='img-profile-human' src={Featuredemp4} alt="" />
                            <div className='featured-imgs-content'>
                                <div className='small-container-featured'>
                                    <p className='card-name'>sdasdasd</p>
                                </div>
                                <div className='featured-lg-container'>
                                    <div className='human-hotel-icons'>
                                        <IoIosContact className='human-icons1' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                    <div className='human-hotel-icons'>
                                        <MdContactMail className='human-icons' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                </div>
                                <div className='round-container'>
                                    <FaCircleDot className='round-icons' />
                                </div>
                            </div>
                        </div>
                        {/* cards2  */}
                        <div className="featured-cards">
                            <img className='img-profile-human' src={Featuredemp5} alt="" />
                            <div className='featured-imgs-content'>
                                <div className='small-container-featured'>
                                    <p className='card-name'>sdasdasd</p>
                                </div>
                                <div className='featured-lg-container'>
                                    <div className='human-hotel-icons'>
                                        <IoIosContact className='human-icons1' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                    <div className='human-hotel-icons'>
                                        <MdContactMail className='human-icons' />
                                        <p className='human-rate'>25 ratings</p>
                                    </div>
                                </div>
                                <div className='round-container'>
                                    <FaCircleDot className='round-icons' />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured