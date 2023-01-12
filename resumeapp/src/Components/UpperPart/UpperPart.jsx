import React from 'react'
import Resume1 from "../../img/resume1.png";
import Resume2 from "../../img/resume2.png";
import Card from '../Card/Card';
import './UpperPart.css'
import { useContext } from "react";
import { themeContext } from "../../Context";
 
const UpperPart = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className='header'>
          <div className="head-left">
              <div className="head-text">
                  <span style={{color: darkMode? 'white': ''}}>The Resume</span>
                  <span>Studio</span>
                  <span style={{color: darkMode? 'white': ''}}>"If opportunity doesn't knock, build a door." ― Milton Berle..... That is why build your brand-new resume with our website for free.</span>
              </div>
  
              <button className='button head-button' >Build Resume</button>
          </div>

          <div className="head-right">

            {/*blur div*/}
            <div className='blur' style={{background : "rgb(238 210 255)"}}> </div>
            <div className='blur' style={{background: '#C1F5FF',top: '17rem', width: '21rem' ,height: '11rem', left: '-9rem'}}> </div>
          </div>
  
        </div>
      )
}

export default UpperPart
