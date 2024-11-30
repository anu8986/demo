import React from 'react'
import Careers from './Careers'
import Navbar from '../page/Navbar'
import Perportysection from './Perportysection'
import Firstpage from '../page/Firstpage'
import Announcement from '../page/Announcement'
import Events from '../page/Events'
import Lastaddress from '../page/Lastaddress'
import Aboutsection from './Aboutsection'
import Featured from './Featured'
import Donedeal from './Donedeal'









function Home() {
    return (
        <div>
            <div >
                <Navbar />
            </div>
            <div className='comon-padding'>
                <Firstpage />
            </div>
            <div className='comon-padding'>
                <Featured />

            </div>
            <div className='comon-padding'>
                <Perportysection />
            </div>
            <div className='common-padding'>
                <Announcement />
            </div>
            <div className='common-padding'>
                <Donedeal/>
            </div>
            <div className='comon-padding'>
                <Aboutsection />
            </div>
            <div className='comon-padding'>
                <Events />
            </div>
            <div >
                <Careers />
            </div>
            <div >
                <Lastaddress />
            </div>
          

        </div>
    )
}

export default Home