import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Featured() {
  return (
    <div>
         <div className='col-10 container'>
                <div className='line-div'></div>
                <div className='featured-section'>
                    <div className='featured-heading'>
                        <p className='featured-agents'>FEATURED <span className='agent-head'>AGENTS</span></p>
                        <p className='meet-agents'>Meet the opportunity to work with some of the top <br />
                            Real Estate Agents in town
                        </p>
                    </div>
                    <div className='View-all'>
                        <FaPlus className='plus-icons' />
                        <div className='view-all-container'>
                            <p>View all </p>
                            <p className='agent'>Agents</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Featured