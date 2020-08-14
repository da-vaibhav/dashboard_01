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
      <div className="ui-card-img"><img src={getIconFromMapping(type)} alt={title}/></div>
      <div>
        <span className="primary-stats">{primary_stat}</span>
        {secondary_stat && <span className="secondary-stats">{secondary_stat}</span>}
        <p className="stats-description">{title}</p>
      </div>
    </div>
  )
}

export default Card;
