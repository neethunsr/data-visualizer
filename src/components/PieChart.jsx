import React, {useEffect, useState} from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart(){
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['mon', 'tues', 'wednes', 'thurs', 'fri', 'sat', 'sun'],
            datasets: [
                {
                    label: 'idk',
                    data: [12, 23, 34, 45, 56, 67, 78],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(15, 100, 50, 0.7)',
                    ],
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return(
        <div className="">
            <div style={{width:"500px", height:"500px"}}>
                <Pie data={chartData} 
                    options={{
                        responsive:true,
                        plugins: {
                            legend: {
                                position: 'right'
                            },
                            title: {
                                display: true,
                                text: 'Pie Chart'
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default PieChart;