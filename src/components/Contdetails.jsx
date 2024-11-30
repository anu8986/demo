import React from 'react'
import { MdOutlineLocalPhone } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";

const contactdetails =()=> {
    return (
        <div>
            <div className='contact-phn'>
                <div><MdOutlineLocalPhone className='phn-icons' /> <span className='phn-details'>+603 7729 9999</span></div>
                <div><GiRotaryPhone className='phn-icons' /> <span className='phn-details'>+603 7729 9999</span></div>
                <div><MdOutlineMailOutline className='phn-icons' /><span className='phn-details'>  techrealtors@gmail.com</span></div>
            </div>
        </div>
    )
}

export default contactdetails