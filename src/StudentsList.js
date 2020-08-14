import React, { useEffect, useState } from 'react';

function StudentsList() {
  const [ListData, setListData] = useState([]);

  useEffect(() => {
    window.fetch('https://my-json-server.typicode.com/shripad-agashe/fake-api/students')
      .then(res => res.json())
      .then(data => {setListData(data)});

  }, []);

  return (
    <div className="list-container">
      {ListData.length > 0 && <div>
        <span className="list-container-title">Students by average mark</span> <hr/>
        {ListData.map(({id, name, marks}) => {
          return (<div key={id} className="list-item">
              <img className="list-item-img" src="user.svg" alt="person image"/>
              <div className="list-item-stats">
                <span>{name}</span>
                <span className="list-item-highlight">{marks}</span>
              </div>
            </div>);
        })}
      </div>}

    </div>
  )
}

export default StudentsList;
