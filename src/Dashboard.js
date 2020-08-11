import React from 'react';
import Card from './Card';

function Dashboard() {
  return (
    <div className="content-container">
      <header>Dashboard</header>
      <small className="sub-head">Mobile UX/UI design course</small>
      <div>
        <Card title="Students" icon="user.svg" />
        <Card title="Average Mark"/>
        <Card title="Underperforming students"/>
      </div>
    </div>
  )
}

export default Dashboard;
