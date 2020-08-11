import React from 'react'

const IconTypeMapping = {
  profiles: 'user.svg',
  calculation: 'chart.svg',
};

function getIconFromMapping(type) {
  return IconTypeMapping[type];
}

function Card({ title, type, primary_stat, secondary_stat}) {
  return (
    <div className="ui-card">
      <img src={getIconFromMapping(type)} alt={title}/>
      <p>{title}</p>
      <span>{primary_stat}</span>
      {secondary_stat && <span>{secondary_stat}</span>}
    </div>
  )
}

export default Card;
