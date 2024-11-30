import React from 'react'
import Selectionoption from './selectionoption'

function Propertylisting() {
    return (
        <div>
            <div>


                <div className='line-div'></div>
                <div className='property-listing-container'>
                    <div className='featured-heading'>
                        <p className='featured-agents'>PROPERTY <span className='agent-head'>LISTINGS</span></p>
                        <p className='meet-agents'>Our property listings ensure your dream properties are <br />
                            no longer just a dream
                        </p>
                    </div>
                    <div className='property-whole-container'>
                        <div className='property-btn'>
                            <button className='buy-btn'>buy</button>
                            <button className='rent-btn'>rent</button>
                        </div>
                        <Selectionoption />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propertylisting