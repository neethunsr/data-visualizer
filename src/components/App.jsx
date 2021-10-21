import React from 'react';
import LineGraph from './LineGraph';
import PieChart from './PieChart';
import '../app.css'
import ChooseGraph from './ChooseGraph';

function App() {

  return (
    <div className="App">
      <center>
      <h1>Data Visualizer</h1>
      <ChooseGraph />
      </center>
    </div>
  );
}

export default App;