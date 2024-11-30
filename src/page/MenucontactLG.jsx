import React from 'react'
import Contactinput from '../components/Continput'
import Contactdetails from '../components/Contdetails'
import Iframecontact from '../components/iframecontact'
import Sharecontact from '../components/sharecontact'
import Optioncontactus from '../components/optioncontactus'

function MenucontactLG() {
    return (
        <div className='menu-lg-container'>
            <div className='menu-lg'>

                <div className="contact-detials">
                    <Contactinput />
                    <Contactdetails />
                </div>

                <div className="map-details">
                    <Iframecontact />
                    <Sharecontact />
                </div>
                <div className="start-up">
                    <Optioncontactus />

                </div>


            </div>
        </div>
    )
}

export default MenucontactLG