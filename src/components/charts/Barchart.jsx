import { useState } from "react";
import Charts from "react-apexcharts";

function BarGraph({className, data}){
    const [barData, setBarData] = useState({
        series: [{
            data: Object.values(data || {})
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
                categories: Object.keys(data || {})
            },
            fill: {
                colors: ["#0B6CD6"]
            }
        },

        grid: {   
            yaxis: {
                lines: {
                    show: true
                }
            },  
        }
    })

    return(
        <div className={className}>
        <Charts options={barData.options} series={barData.series} type="bar" height={250}/>
        </div>
    );
}


export default BarGraph;