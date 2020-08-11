import React from 'react';
import Card from './Card';

function Dashboard() {
  return (
    <div className="content-container">
      <header>
        <h2>Dashboard</h2>
        <small className="sub-head">Mobile UX/UI design course</small>
      </header>
      <div>
        <Card title="Students" icon="user.svg" />
        <Card title="Average Mark" icon="chart.svg"/>
        <Card title="Underperforming students" icon="chart.svg"/>
      </div>
    </div>
  )
}

export default Dashboard;
