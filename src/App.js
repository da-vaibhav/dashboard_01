import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
