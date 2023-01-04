import React from 'react'
import "./Card.css";

const Card = ({resume}) => {
  return (
    <div className='card'>
      <img src={resume} alt=" "/>
    </div>
  )
}

export default Card
 