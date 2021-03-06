import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph(props){
    const [chartData, setChartData] = useState({});
    const chart = () => {
        setChartData({
            labels: props.xlabel,
            datasets: [
                {
                    label: props.label,
                    data: props.ylabel,
                    backgroundColor: 'green',
                    borderWidth: 1,
                    borderColor: 'pink'
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return(
        <div className="">
            <div style={{height:"500px", width:"600px"}}>
                <Line 
                    data={chartData}
                    options={{
                        responsive:true,
                        plugins: {
                            legend: {
                                position: 'right'
                            },
                            title: {
                                display: true,
                                text: props.title
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default LineGraph;