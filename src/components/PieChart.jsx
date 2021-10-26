import React, {useEffect, useState} from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart(props){
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: props.xlabel,
            datasets: [
                {
                    label: props.label,
                    data: props.ylabel,
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
            <div style={{width:"600px", height:"500px"}}>
                <Pie data={chartData} 
                    options={{
                        responsive:true,
                        plugins: {
                            legend: {
                                position: 'right'
                            },
                            title: {
                                display: true,
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default PieChart;