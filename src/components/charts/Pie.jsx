import { useState } from "react";
import Charts from "react-apexcharts";

function Pie({className, data}){
    const [pieData, setPieData] = useState({
        series: Object.values(data),
        chartOptions: {
            labels: Object.keys(data)
        },
        options: {
            chart: {
            width: 380,
            type: 'donut',
            },
            plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
            },
            dataLabels: {
            enabled: false
            },
            fill: {
            type: 'gradient',
            },
            legend: {
            formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
            },
            responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                width: 250
                },
                legend: {
                position: 'bottom'
                }
            }
            }]
        },
    })

    return(
        <div className={className}>
            <Charts options={pieData.options} series={pieData.series} type="donut" height={300}/>
        </div>
    );
}


export default Pie;
