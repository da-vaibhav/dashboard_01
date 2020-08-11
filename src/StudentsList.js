import React, { useEffect, useState } from 'react';

function StudentsList() {
  const [ListData, setListData] = useState([]);

  useEffect(() => {
    window.fetch('https://my-json-server.typicode.com/shripad-agashe/fake-api/students')
      .then(res => res.json())
      .then(data => {setListData(data)});

  }, []);

  return (
    <div>
      {ListData.length > 0 && <div>
        <span>Students by average mark</span>
        {ListData.map(({id, name, marks}) => {
          return (<div key={id}>
              {name}
              {marks}
            </div>);
        })}
      </div>}

    </div>
  )
}

export default StudentsList;
