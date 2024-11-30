import React from 'react'


import { RiNumber0 } from "react-icons/ri";
import { RiNumber1 } from "react-icons/ri";
import Optioncontactus from '../components/optioncontactus';
import MenucontactLG from '../page/MenucontactLG';
import MenucontactMD from '../page/MenucontactMD'
import MenucontactSD from '../page/MenucontactSD';


function Contactus() {

    return (
        <div className='contact-us'>
         
          <MenucontactLG/>
          <MenucontactMD/>
          <MenucontactSD/>

        </div>
    )
}

export default Contactus