import React, {useState} from 'react';
import LineGraph from './LineGraph';
import { Form } from 'react-bootstrap';
import PieChart from './PieChart';
import '../app.css';

function ChooseGraph(){
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
            {selected==="line" && <LineGraph />}
            {selected==="pie" && <PieChart />}
        </div>
    );
}

export default ChooseGraph;