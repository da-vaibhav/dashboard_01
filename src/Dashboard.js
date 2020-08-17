import React, { useEffect, useState } from 'react';
import Card from './Card';
import StudentsList from './StudentsList';
import getDataFrom from './api';

function Dashboard() {
  const [Stats, setStats] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDataFrom('dashboard')
      .then(data => {
        setStats(data);
      })
      .finally(() => { setLoading(false)});
  }, []);

  return (
    <div className="content-container">
      <div className="top-nav">
        <span>Cody Simmons</span>
        <span>Lecturer</span>
        <div>
          <img src="user.svg" alt="person image"/>
        </div>
      </div>
      <header>
        <h2>Dashboard</h2>
        <small className="sub-head">Mobile UX/UI design course</small>
      </header>

      {Loading && <span>Loading dashboard stats...</span> }

      {Stats.length > 0 && <React.Fragment>
        <div className="stats-container">
          {Stats.map(({id, title , type, line1 = null, line2 = null})=> {
            return <Card
                      key={id}
                      title={title}
                      type={type}
                      primary_stat={line1}
                      secondary_stat={line2}
                    />
          })}
        </div>
      </React.Fragment>}
      <StudentsList />
    </div>
  )
}

export default Dashboard;
