import React from 'react'
import { PiNumberZeroBold } from "react-icons/pi";
import { PiNumberOneBold } from "react-icons/pi";
import { MdOutlineNavigateNext } from "react-icons/md";
import { PiNumberTwoLight } from "react-icons/pi";
import { PiNumberThreeBold } from "react-icons/pi";
import { PiNumberFourBold } from "react-icons/pi";
import Ch from '../assets/file (1).png'
import ch1 from '../assets/file.png'

function Careers() {
    return (
        <div>
            <div className='career-section'>

                <div className='career-container'>
                    <div className="in-career">
                        <div>
                            <div className='line-div'></div>
                            <h1 className='careers-heading'>CAREERS</h1>
                        </div>
                        <p className='careers-heading'>Spectrum of oppurtunities <br /> and be the agents  of change</p>
                        <p className='careers-para'>A career in real estate provides flexibility and freedom to set your own pace. <br />
                            The rewards of a real estate career are a potential for high earnings, status in <br />
                            the community, time freedom, the intellectual challenge and the satisfaction <br />
                            from those accomplishments
                        </p>
                    </div>
                </div>
                <div className='career-container1'>
                    <div className='in-career'>
                        <div className='Real-estate'>
                            <div className='number-container'>
                                <PiNumberZeroBold className='estate-count' />
                                <PiNumberOneBold className='estate-count' />
                                <p className='real-para'>Real Estate Agent</p>
                            </div>
                            <div>
                                <MdOutlineNavigateNext className='nxt-arrow-real' />
                            </div>
                        </div>
                        <div className='line-divs'></div>
                        {/* line option  */}
                        <div className='Real-estate'>
                            <div className='number-container'>
                                <PiNumberZeroBold className='estate-count' />
                                <PiNumberTwoLight className='estate-count' />
                                <p className='real-para'>Real Estate Broker</p>
                            </div>
                            <div>
                                <MdOutlineNavigateNext className='nxt-arrow-real' />
                            </div>
                        </div>
                        <div className='line-divs'></div>
                        {/* line option3  */}
                        <div className='Real-estate'>
                            <div className='number-container'>
                                <PiNumberZeroBold className='estate-count' />
                                <PiNumberThreeBold className='estate-count' />
                                <p className='real-para'>Loan Officer</p>
                            </div>
                            <div>
                                <MdOutlineNavigateNext className='nxt-arrow-real' />
                            </div>
                        </div>
                        <div className='line-divs'></div>
                        {/* line option4  */}
                        <div className='Real-estate'>
                            <div className='number-container'>
                                <PiNumberZeroBold className='estate-count' />
                                <PiNumberFourBold className='estate-count' />

                                <p className='real-para'>Closing Agent</p>
                            </div>
                            <div>
                                <MdOutlineNavigateNext className='nxt-arrow-real' />
                            </div>
                        </div>
                        <div className='line-divs'></div>
                    </div>
                </div>

                <div className='ch-position-container'>
                    <img className='ch-imgs' src={Ch} alt="" />
                    <p className='tech-real'>TECH</p>
                    <p className='tech-reals'>REALTORS</p>
                    <img className='ch-imgs' src={ch1} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Careers