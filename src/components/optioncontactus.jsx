import React from 'react'
import { PiNumberZeroBold } from "react-icons/pi";
import { PiNumberOneBold } from "react-icons/pi";
import { PiNumberTwoLight } from "react-icons/pi";
import { PiNumberThreeBold } from "react-icons/pi";
import { PiNumberFourBold } from "react-icons/pi";


function optioncontactus() {
    return (
        <div className='option-main-container'>

            <div className="option1">
                <PiNumberZeroBold className='count-option' />
                <PiNumberOneBold className='count-option1' />
                <div className='option-details'>
                    <h2 className='heading-option-item' >Start with us</h2>
                    <p>property Listings</p>
                    <p>Esteemed Agents</p>
                </div>

            </div>

            <div className="option1">
                <PiNumberZeroBold className='count-option' />
                <PiNumberTwoLight className='count-option1' />
                <div className='option-details'>
                    <h2 className='heading-option-item' >Our Story</h2>
                    <p>Abouts</p>
                    <p>Awards</p>
                    <p>Events</p>
                </div>

            </div>

            <div className="option1">
                <PiNumberZeroBold className='count-option' />
                <PiNumberThreeBold className='count-option1' />
                <div className='option-details'>
                    <h2 className='heading-option-item'>What We Achieved</h2>
                    <p>Done Deals</p>
                    <p>Top Achivers</p>
                    <p>Announcements</p>
                </div>

            </div>

            <div className="option1">
                <PiNumberZeroBold className='count-option' />
                <PiNumberFourBold className='count-option1' />
                <div className='option-details'>
                    <h2 className='heading-option-item'>Careers</h2>
                </div>
            </div>
            
        </div>
    )
}

export default optioncontactus