import React from 'react'
import Contactinput from '../components/Continput'
import Optioncontactus from '../components/optioncontactus'
import Iframecontact from '../components/iframecontact'
import Sharecontact from '../components/sharecontact'
import Contactdetails from '../components/Contdetails'

function MenucontactMD() {
  return (
    <div className='menu-md-container'>
      <div className='input-options'>
        <Contactinput />
        <Optioncontactus />
      </div>
      <div className='iframe-md-screen'>
        <Iframecontact />
      </div>
      <div className='details-share'>
        <Sharecontact />
        <Contactdetails />
      </div>



    </div>
  )
}

export default MenucontactMD