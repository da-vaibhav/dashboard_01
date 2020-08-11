import React from 'react'

function Card({ title, icon }) {
  return (
    <div className="ui-card">
      <img src={icon} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default Card;
