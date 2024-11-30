import React from 'react'
import Gallery1 from '../assets/Awards cards1.jpeg'
import Gallery2 from '../assets/enjoy cards2.jpg'
import Gallery3 from '../assets/Seminar hall cards.jpg'
import Gallery4 from '../assets/teaching card4.jpg'
import Gallery5 from '../assets/use-fairy-lights carrds.jpg'
import Gallery6 from '../assets/awards-card7.jpg'

function Events() {
    return (
        <div>
            <div className='Events-section'>
                <div className="container event-container">
                    <div className='event-cont'>
                        <div>
                            <div className='line-div'></div>
                            <h1 className='events-heading'>EVENTS</h1>
                        </div>
                        <div>
                            <div className='list-property'>
                                <div className='option-hg'>
                                    <p className='meet-agents'>Year</p>
                                    <select className='selection-dropdown'>
                                        <option value="">2024</option>
                                        <option value="">2023</option>
                                        <option value="">2022</option>
                                        <option value="">2021</option>
                                    </select>
                                </div>
                                <div>
                                    <p className='meet-agents'>events</p>
                                    <select className='selection-dropdown'>
                                        <option value="">Annual Dinner</option>
                                        <option value="">Annual Dinner1</option>
                                        <option value="">Annual Dinner2</option>
                                        <option value="">Annual Dinner3</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* events card container  */}
                    <div className='events-card-container'>
                        <div className="event-container1">
                            <p className='event-heading'>creating connections and <br /> buliding bridges together</p>
                            <p className='event-para'>Build trust form an emotional connection and have a chance <br />
                                to standout from the crowd.
                            </p>
                            <div className='event-img-gallery-container'>
                                <div className="gallary-card1">
                                    <img className='award-gallery' src={Gallery1} alt="" />
                                    <img className='enjoy-gallery' src={Gallery2} alt="" />
                                </div>
                                <div className="gallary-card2">
                                    <img className='seminar-gallery' src={Gallery3} alt="" />
                                    <img className='teaching-gallery' src={Gallery4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="event-container2">
                            <div className='gallery-celeb'>
                                <img className='cele-gallery' src={Gallery5} alt="" />
                                <img className='cele-gallery1' src={Gallery6} alt="" />
                            </div>
                            <div className='gallery-celeb'>
                                <img className='cele-gallery1' src={Gallery6} alt="" />
                                <img className='cele-gallery' src={Gallery5} alt="" />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Events