import React, {useState} from 'react';
import LineGraph from './LineGraph';
import { Form } from 'react-bootstrap';
import PieChart from './PieChart';
import '../app.css';

function ChooseGraph(props){
    const [selected, setSelected] = useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
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
            {selected==="line" && <LineGraph xlabel={props.x} ylabel={props.y} />}
            {selected==="pie" && <PieChart />}
        </div>
    );
}

export default ChooseGraph;