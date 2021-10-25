import React from 'react';
import '../app.css'
import ChooseGraph from './ChooseGraph';
import DragDrop from './DragDrop';

function App() {

  return (
    <div>
      <h1>Data Visualizer</h1>
      <DragDrop />
      <ChooseGraph />
    </div>
  );
}

export default App;