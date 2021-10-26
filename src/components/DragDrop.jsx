import React, {useState} from 'react';
import {ListGroup, Container, Row, Col} from 'react-bootstrap';
import data from '../data';
import '../dragdrop.css';
import LineGraph from './LineGraph';
import { Form } from 'react-bootstrap';
import PieChart from './PieChart';
import '../app.css';

export const DragDrop = () => {
  const [dragged, setDragged] = useState("")
  const [x, setX] = useState('');
  const [y, setY] = useState('');

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
            {selected==="line" && <LineGraph xlabel={xLabel} ylabel={yLabel} label={x} title={x.concat("-",y," Chart")}/>}
            {selected==="pie" && <PieChart xlabel={xLabel} ylabel={yLabel} title={x.concat("-",y, " Chart")}/>}
        </div>
    );
  }
  return (
    <div className="">    
    <ListGroup horizontal>
      <ListGroup.Item variant="success" draggable="true" id={Object.keys(data)[0]} onDragStart={drag}>{Object.keys(data)[0]}</ListGroup.Item>
      <ListGroup.Item variant="success" draggable="true" id={Object.keys(data)[1]} onDragStart={drag}>{Object.keys(data)[1]}</ListGroup.Item>
    </ListGroup>
    <ListGroup horizontal>
      <ListGroup.Item variant="primary" draggable="true" id={Object.keys(data)[2]} onDragStart={drag}>{Object.keys(data)[2]}</ListGroup.Item>
      <ListGroup.Item variant="primary" draggable="true" id={Object.keys(data)[3]} onDragStart={drag}>{Object.keys(data)[3]}</ListGroup.Item>
      <ListGroup.Item variant="primary" draggable="true" id={Object.keys(data)[4]} onDragStart={drag}>{Object.keys(data)[4]}</ListGroup.Item>
      <ListGroup.Item variant="primary" draggable="true" id={Object.keys(data)[5]} onDragStart={drag}>{Object.keys(data)[5]}</ListGroup.Item>
    </ListGroup>
    <Container style={{margin:"30px"}} fluid="sm-6">
      <Row>
        <Col className="dropBox categorical" id="x" onDrop={drop} onDragOver={allowDrop}><span>X/Categorical values: {x}</span></Col>
        <Col className="dropBox numerical" id="y" onDrop={drop} onDragOver={allowDrop}><span>Y/Numerical values: {y}</span></Col>
      </Row>
    </Container>
    <ChooseGraph/>
    </div>
  )
}

export default DragDrop;