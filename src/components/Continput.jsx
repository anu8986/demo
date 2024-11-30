import React from 'react'
import '../app.css'

const Contactinput = () => {
    return (
        <div className='cont-input'>
            <h1 className='contact-heading'>CONTACT <span>US</span></h1>
            <div className='contact-input-container'>
                <input className='input-contact' type="text" placeholder='Name *' />
                <input className='input-contact' type="text" placeholder='Contact Number *' />
                <input className='input-contact' type="text" placeholder='Email *' />
                <textarea className='input-contact-textarea' placeholder='Message' />
                <div className='btn-contact'>
                    <button className='sub-contact-btn'>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Contactinput;