import React from 'react'
import House1 from '../assets/pxfuel.jpg'
import { IoBedSharp } from "react-icons/io5"
import { GiFlexibleLamp } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineInterpreterMode } from "react-icons/md";
import Employee1 from '../assets/employee 1.jpg'
import { FaWhatsapp } from "react-icons/fa";

function Cardspro( props) {
    return (
        <div>
            <div class="card card-main-pro ">
                <div class="cards-body">
                    <div className="pro-img-card-container">
                        <div className="pro-img-container">
                            <img className='house1' src={props.img} alt="" />
                            <p className='pricing-pro'>RM 75,00,000</p>
                        </div>
                        <div className="pro-content-container">
                            <div className="hotel-name">
                                <p className='name-htl'>Ect Molestie ac</p>
                                <p className='meet-agents'>Fermentum posure uma </p>
                            </div>
                            <div className="distance-prop">
                                <IoBedSharp className='dst-icons' />
                                <p className='dst-icons'> 3 Beds</p>
                                <GiFlexibleLamp className='dst-icons' />
                                <p className='dst-icons'>2 bath</p>
                                <FaMapMarkedAlt className='dst-icons' />
                                <p className='dst-icons'>900 m</p>
                                <MdOutlineInterpreterMode className='dst-icons' />
                                <p className='dst-icons'>RM 9657/sqt</p>
                            </div>
                            <div className='whatsapp-dtn'>
                                <div className='emp-img-name'>
                                    <img className='profile-dst' src={Employee1} alt="" />
                                    <div className='emp-name'>
                                        <p>Shah Alam </p>
                                        <p>Banyam Signature</p>
                                    </div>
                                </div>
                                <FaWhatsapp className='whatsapp-icons' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardspro