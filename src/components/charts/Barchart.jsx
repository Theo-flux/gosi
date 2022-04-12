import { useState } from "react";
import Charts from "react-apexcharts";

function BarGraph({className, data}){
    const [barData, setBarData] = useState({
        series: [{
            data: [1200,400, 430, 448, 470, 540, 580, 690, 1100]
        }],

        options: {
            chart: {
                id: 'bar-chart'
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: [
                    'AA', 'AAC', 
                    'APC', 'SDP', 
                    'NNDP', 'NPC', 
                    'YPC', 'APGA', 'Others'
                ],
            },
            fill: {
                colors: ["#0B6CD6"]
            }
        }
    })


    return(
        <div className={className}>
        <Charts options={barData.options} series={barData.series} type="bar" height={250}/>
        </div>
    );
}


export default BarGraph;