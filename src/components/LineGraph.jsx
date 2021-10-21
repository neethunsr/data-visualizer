import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { days, present, absent } from '../data';
// import { LineChart, LineSeries, PointSeries } from 'reaviz';

function LineGraph(){
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: days,
            datasets: [
                {
                    label: 'present',
                    data: present,
                    backgroundColor: 'pink',
                    borderWidth: 1,
                    borderColor: 'pink'
                },
                {
                    label: 'absent',
                    data: absent,
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