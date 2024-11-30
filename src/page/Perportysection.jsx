import React from 'react'
import Selectionoption from '../components/selectionoption'
import Cardspro from '../components/Cardspro'
import House1 from '../assets/pxfuel.jpg'
import House2 from '../assets/pxfuel (3).jpg'
import House3 from '../assets/pxfuel (4).jpg'

function Perportysection() {
    return (
        <div>
            <div className="property-section">
                <div className=' container property-container'>
                    {/* property-content  */}
                    <div className="property-content1">
                        <div className='featured-heading'>
                            <div className='line-div'></div>
                            <p className='featured-agents'>PROPERTY <span className='agent-head'>LISTINGS</span></p>
                            <p className='meet-agents'>Our property listings ensure your dream properties are <br />
                                no longer just a dream
                            </p>
                        </div>
                    </div>

                    <div className="property-content2">
                        <div className='btn-property-container'>
                            <div className='property-btn'>
                                <button className='buy-btn'>buy</button>
                                <button className='rent-btn'>rent</button>
                            </div>
                        </div>
                        <div className='option-pricing-container'>
                            <Selectionoption />
                            <div className='pricing-property-container'>
                                <p className='para-heading'>price :</p>
                                <div className='RM-container'>
                                    <p className='para-heading'>RM 0</p>
                                    <p className='para-heading'>RM 5,000,000</p>
                                </div>
                                <div className="progress" style={{ height: '6px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ backgroundColor: 'orangered' }}
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="property-card-img-container">
                    <div className="property-bg-img-container">
                    </div>
                    <div className="property-bg-card-container">
                        <Cardspro img={House2} />
                        <div className='cards-pro-hotel'>
                            <Cardspro img={House1} />
                        </div>

                        <Cardspro img={House2} />

                    </div>


                </div>
            </div>


        </div>
    )
}

export default Perportysection