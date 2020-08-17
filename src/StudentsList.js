import React, { useEffect, useState } from 'react';

function StudentsList() {
  const [ListData, setListData] = useState([]);
  const [DescendingOrder, setOrder] = useState(true);

  useEffect(() => {
    window.fetch('https://my-json-server.typicode.com/shripad-agashe/fake-api/students')
      .then(res => res.json())
      .then(data => {
        setListData(data.sort((a, z) => z.marks - a.marks));
      });

  }, []);

  function toggleOrder () {
    setOrder(!DescendingOrder);
    setListData(ListData.sort((a, z) => DescendingOrder ? (a.marks - z.marks) : (z.marks - a.marks)));
  }

  return (
    <div className="list-container">
      {ListData.length > 0 && <div>
        <div className="student-list-title">
          <span className="list-container-title">Students by average mark</span>
          <button className="btn-toggle-order" type="button" onClick={toggleOrder}>
            {DescendingOrder ? `Descending ${String.fromCharCode("0x2B07")}` : `Ascending ${String.fromCharCode("0x2B06")}`}
          </button>
        </div>

        <hr/>

        {ListData.map(({id, name, marks}) => {
          return (<div key={id} className="list-item">
              <img className="list-item-img" src="user.svg" alt="person image"/>
              <div className="list-item-stats">
                <span className="list-item-stats-primary">{name}</span>
                <span className="list-item-highlight">{marks}</span>
              </div>
            </div>);
        })}
      </div>}

    </div>
  )
}

export default StudentsList;
