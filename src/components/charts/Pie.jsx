import { useState } from "react";
import Charts from "react-apexcharts";
import {useMediaQuery} from "react-responsive"

function Pie({className, data}){
    const isDesktop = useMediaQuery({maxWidth: 767})

    const [pieData, setPieData] = useState({
        series: Object.values(data),
        chartOptions: {
            labels: Object.keys(data)
        },
        
        options: {
            labels: Object.keys(data),
            chart: {
            width: 380,
            type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270,
                }
            },
            dataLabels: {
            enabled: true
            },
            fill: {
            type: 'gradient',
            },
            legend: {
            formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex].toLocaleString()
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
