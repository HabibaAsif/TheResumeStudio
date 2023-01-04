import React, { useState } from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link,useNavigate} from 'react-router-dom'


const Navbar = () => {
    const navigate=useNavigate()
    const buildresume=()=>{
     navigate('/resume')
    }      
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-webname">The Resume Studio</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>
                        Home
                        
                        
                    </li>
                    <li onClick={buildresume}>BuildResume</li>
                    <li>GetStarted</li>
                </ul>
            </div>
        <div className="n-profile">
           <span> <Link to="/profile"> Profile picture</Link>
           </span>
        </div>
        </div>
    </div>
  )
}

export default Navbar
