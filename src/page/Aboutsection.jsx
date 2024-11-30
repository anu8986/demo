
import React from 'react'
import Trophy from '../assets/trophy.png'

function Aboutsection() {
    return (
        <div>
            <div className='award-section'>
                <div className="awd-ctn1">
                    <div className="container col-9 awd-content">
                      <div>
                            <div className='line-div'></div>
                            <h1 className='avd-heading'>AWARDS</h1>
                        </div>  
                        <div className="trophy-section">
                            <div className="trophy-container1">
                                <img className='trophy-img' src={Trophy} alt="" />
                                <img className='trophy-img' src={Trophy} alt="" />
                            </div>
                            <div className='trophy-section1'>
                                <img className='trophy-img' src={Trophy} alt="" />
                                <img className='trophy-img' src={Trophy} alt="" />
                            </div>
                            <div className='sd-trophy-container'>
                                <img className='trophy-img' src={Trophy} alt="" />
                                <img className='trophy-img' src={Trophy} alt="" />
                                <img className='trophy-img' src={Trophy} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="awd-ctn2">
                    <div className='abt-section'>
                        <div className='abt-line-div'></div>
                        <h1 className='abt-heading'>ABOUT US </h1>
                    </div>
                    <div className='Abt-section1'>
                        <p className='abt-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quaerat, quo quas ipsam odio et soluta debitis esse accusamus voluptates
                            obcaecati inventore nobis commodi corrupti unde, dolorum vel magni nam, iure officia atque totam! Earum corrupti eligendi, tenetur
                            atque alias illum numquam in, fuga quibusdam incidunt quidem repellendus suscipit doloremque voluptatum ni
                        </p>
                        <p className='abt-para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium, doloremque labore quaerat excepturi fuga
                            iusto illum eius veniam blanditiis culpa at optio facere
                        </p>
                        <p className='abt-para2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur quas molestias illum in vel reprehenderit suscipit
                            dolores corrupti ab maiores?   obcaecati inventore nobis commodi corrupti unde,
                        </p>
                        <p className='abt-para3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quaerat, quo quas ipsam odio et soluta debitis esse accusamus voluptates
                            obcaecati inventore nobis commodi corrupti unde, dolorum vel magni nam, iure officia atque totam! Earum corrupti eligendi, tenetur
                            atque alias illum numquam in, fuga quibusdam incidunt quidem repellendus suscipit doloremque voluptatum ni
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutsection