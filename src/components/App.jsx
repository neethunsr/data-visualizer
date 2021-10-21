import React from 'react';
import LineGraph from './LineGraph';
import PieChart from './PieChart';
import './app.css'

function App() {

  return (
    <div className="App">
      <center>
      <h1>Data Visualizer</h1>
      <LineGraph />
      <PieChart />
      </center>
    </div>
  );
}

export default App;