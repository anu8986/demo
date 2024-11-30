import React from 'react'
import '../app.css'

function Propertycount() {
    return (
        <div className='property-item-container'>
            <div className='property-items'>
                <p className='property-count'>850+</p>
                <p className='property-content'>property</p>
                <p className='property-content'>Listings</p>
            </div>

            <div className='property-items'>
                <p className='property-count'>110+</p>
                <p className='property-content'>Esteemed</p>
                <p className='property-content'>Agents</p>
            </div>

            <div className='property-items'>
                <p className='property-count'>958+</p>
                <p className='property-content'>Regular</p>
                <p className='property-content'>Clients</p>
            </div>
        </div>
    )
}

export default Propertycount