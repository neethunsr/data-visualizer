import React from 'react';
import LineGraph from './LineGraph';

function ChooseGraph(){
    const handleClick = () => {
        return (<LineGraph />);
    }
    return(
        <div className="">
            <button type="submit" onClick={handleClick}>Line Chart</button>
            {/* <button type="submit" onClick={handleClick}>Pie Chart</button> */}
        </div>
    );
}

export default ChooseGraph;