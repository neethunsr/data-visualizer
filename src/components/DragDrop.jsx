import React, {useState} from 'react';
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import { Basket } from './Basket';
// import { PetCard } from './PetCard';
import {ListGroup, Container, Row, Col} from 'react-bootstrap';
import data from '../data';
import '../dragdrop.css';
import LineGraph from './LineGraph';
import { Form } from 'react-bootstrap';
import PieChart from './PieChart';
import '../app.css';

export const DragDrop = () => {
  const [dragged, setDragged] = useState("")
  const [x, setX] = useState('Drop X here');
  const [y, setY] = useState('Drop Y here');

  function allowDrop(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  
  function drag(event) {
    setDragged(event.target.id);
    console.log(event.target.draggable);
    console.log(dragged);
  }

  function drop(event) {
    if (event.target.id === "x")
      setX(dragged) 
    else if(event.target.id === "y")
      setY(dragged)
      // console.log("x",x);
      // console.log("y",y);
  }

  function ChooseGraph(){
    const [selected, setSelected] = useState("");
    const [xLabel, setxLabel] = useState(null);
    const [yLabel, setyLabel] = useState(null);

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
        // console.log("Object.keys(data)",Object.keys(data).filter(value=>value===x));
        setxLabel(data[x]);
        setyLabel(data[y]);
    };
    return(
        <div className="choose">            
            <div className="drop-down">
            <Form.Select onChange={changeSelectOptionHandler} aria-label="Default select example">
                <option>Choose a graph</option>
                <option value="pie" >Pie Chart</option>
                <option value="line">Line Chart</option>
            </Form.Select>
            </div>
            {selected==="line" && <LineGraph xlabel={xLabel} ylabel={yLabel} label={y} />}
            {selected==="pie" && <PieChart xlabel={xLabel} ylabel={yLabel} label={y}/>}
        </div>
    );
  }
  return (
    <div className="">    
    <ListGroup horizontal>
      <ListGroup.Item draggable="true" id={Object.keys(data)[0]} onDragStart={drag}>{Object.keys(data)[0]}</ListGroup.Item>
      <ListGroup.Item draggable="true" id={Object.keys(data)[1]} onDragStart={drag}>{Object.keys(data)[1]}</ListGroup.Item>
      <ListGroup.Item draggable="true" id={Object.keys(data)[2]} onDragStart={drag}>{Object.keys(data)[2]}</ListGroup.Item>
      <ListGroup.Item draggable="true" id={Object.keys(data)[3]} onDragStart={drag}>{Object.keys(data)[3]}</ListGroup.Item>
    </ListGroup>
    <Container fluid="sm-6">
      <Row>
        <Col className="dropBox" id="x" onDrop={drop} onDragOver={allowDrop}><span>{x}</span></Col>
        <Col className="dropBox" id="y" onDrop={drop} onDragOver={allowDrop}><span>{y}</span></Col>
      </Row>
    </Container>
    <ChooseGraph/>
    
    </div>
  )
}

export default DragDrop;