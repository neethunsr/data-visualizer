import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import data from '../data';
// import { LineChart, LineSeries, PointSeries } from 'reaviz';

function LineGraph(props){
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: data.present,
            datasets: [
                {
                    label: props.label,
                    data: props.ylabel,
                    backgroundColor: 'pink',
                    borderWidth: 1,
                    borderColor: 'pink'
                },
                {
                    label: Object.keys(data)[0],
                    data: data.absent,
                    backgroundColor: 'green',
                    borderWidth: 1,
                    borderColor: 'green'
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
                                text: 'Line Chart'
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default LineGraph;