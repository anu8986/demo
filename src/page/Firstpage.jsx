import React from 'react'
import Houseimg from '../assets/home11.jpg'
import Housing1 from '../assets/home12.jpg'
import { IoMdSearch } from "react-icons/io";
import Filter from '../assets/filter.png'

function Firstpage() {
    return (
        <div>

            <div className='home-sections'>
                <div className="col-12 container home-container-secion">
                    <div className="home-container">
                        <div className="home-content1">
                            <div className='count'>
                                <div className='cal-count'>
                                    <p className='property-count'>850+</p>
                                    <p className='property-count'>110+</p>
                                    <p className='property-count'>958+</p>
                                </div>
                                <div className='cal-content'>
                                    <div className='property-cont'>
                                        <p className='property-content'>property</p>
                                        <p className='property-content'>Listings</p>
                                    </div>
                                    <div className='property-cont'>
                                        <p className='property-content'>Esteemed</p>
                                        <p className='property-content'>Agents</p>
                                    </div>
                                    <div className='property-cont'>
                                        <p className='property-content'>Regular</p>
                                        <p className='property-content'>Clients</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="home-content2">
                            <img className='house-img' src={Houseimg} alt="" />
                        </div>
                        <div className='home-posti'>
                            <p className='home-pst-content'>CREATING BLISSFUL <br /> PROPERTY SEARCH <br /> IS OUR SPECIALITY</p>
                            <p className='home-content-one'>With a lot of experience we will help you shortlist the <br /> properties you want </p>
                            <div className='input-home-container'>
                                <IoMdSearch className='search-icons' />
                                <input className='input-posti' type="text" placeholder='enter the username ' />
                                <img className='filter' src={Filter} alt="" />
                                <button className='home-btn-search'>Search</button>
                            </div>
                        </div>

                    </div>
                    <div className="home-container1">
                        <img className='house-img1' src={Housing1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firstpage