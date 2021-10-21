import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
// import { LineChart, LineSeries, PointSeries } from 'reaviz';

function LineGraph(){
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['mon', 'tues', 'wednes', 'thurs', 'fri', 'sat', 'sun'],
            datasets: [
                {
                    label: 'present',
                    data: [12, 23, 34, 45, 56, 67, 78],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'absent',
                    data: [1, 83, 34, 45, 36, 67, 78],
                    backgroundColor: [
                        'rgba(250, 99, 13, 0.7)'
                    ],
                    borderWidth: 4
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