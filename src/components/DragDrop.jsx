import React, {useState} from 'react';
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import { Basket } from './Basket';
// import { PetCard } from './PetCard';
import ListGroup from 'react-bootstrap/ListGroup';

export const DragDrop = () => {
  const [dragged, setDragged] = useState("")
  const [xLabel, setxLabel] = useState(null);
  const [yLabel, setyLabel] = useState(null);
  const [x, setX] = useState('Drop X here');
  const [y, setY] = useState('Drop Y here');
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    setDragged(event.target.id);
    console.log(event.target.draggable);
    console.log(dragged);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  return (
    // <DndProvider backend={HTML5Backend}>
    //   {/* Here, render a component that uses DND inside it */}
    //   <PetCard />
    //   <Basket />
    // </DndProvider>
    <ListGroup>
      <ListGroup.Item draggable="true" id="Present" onDragStart={drag}>Present</ListGroup.Item>
      <ListGroup.Item>Present</ListGroup.Item>
      <ListGroup.Item>Present</ListGroup.Item>
    </ListGroup>
  )
}

export default DragDrop;