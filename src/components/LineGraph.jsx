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
                    label: 'idk',
                    data: [12, 23, 34, 45, 56, 67, 78],
                    backgroundColor: 'blue',
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
            <div className="">
                <Line data={chartData}/>
            </div>
        </div>
    );
}

export default LineGraph;