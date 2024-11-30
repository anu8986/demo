import React from 'react'
import Bulidingannou from '../assets/annouce.jpg'
import Homepostrt from '../assets/home-poater2.jpg'
import Homepostrt1 from '../assets/home-poster1.jpg'
import Homepostrt2 from '../assets/home-poster.jpg'
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

function Announcement() {
    return (
        <div>
            <div className='announcement-section'>
                <div className='container announcement-container'>
                    <div className='annoce-container1'>
                        <div className='linecontainer'>
                            <div className='line-div'></div>
                            <h1 className='annou-heading'>ANNOUNCEMENT</h1>
                        </div>
                        <div className='annoce-para-container'>
                            <p className='annoce-heading'>
                                Hear it Straight from us and <br /> the media
                            </p>
                            <p className='annoce-para'> To catch the latest corporate announcement, corporate news <br />
                                and happenings at tech realtors
                            </p>
                        </div>
                        {/* carousel card */}

                        <div className='carousel-container'>
                            <img className='home-poster' src={Homepostrt} alt="" />
                            <img className='home-poster' src={Homepostrt2} alt="" />
                            <img className='home-poster' src={Homepostrt1} alt="" />
                            <IoIosArrowBack className='nxt-carousel' />
                            <MdOutlineNavigateNext className='back-carousel' />



                        </div>
                    </div>
                    <div className="annoce-container2">
                        <div className='annou-img'>
                            <img className='annoucement-buliding' src={Bulidingannou} alt="" />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Announcement