import { useState } from "react";
import Charts from "react-apexcharts";
import {useMediaQuery} from "react-responsive"

const colorArr = [
    '#6FA485',
    '#006328',
    '#0A371D',
    '#047130',
    '#0C4122',
    '#6FA485',
    '#A3B4AA',
]

function Pie({className, data}){
    const isDesktop = useMediaQuery({maxWidth: 767})

    const [pieData, setPieData] = useState({
        series: Object.values(data || {}),
        chartOptions: {
            labels: Object.keys(data || {}),
        },
        
        options: {
            labels: Object.keys(data || {}),
            colors: colorArr,
            chart: {
            width: 380,
            type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270,
                },

                
            },
            dataLabels: {
            enabled: true,
            },
            fill: {
                colors: colorArr,
                type: 'gradient',
            },
            legend: {
            formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex].toLocaleString()
            }
            },
            tooltip: { 
                enabled: true, 
                custom: function ({ series, seriesIndex, dataPointIndex, w }) { 
                    let total = 0; for (let x of series) { total += x; } let selected = series[seriesIndex] 
                    return `
                    <div
                        style="color:white;
                        background-color:${colorArr[seriesIndex]};
                        padding:.5em 1em;"
                    > ${w.config.labels[seriesIndex]} : ${selected.toLocaleString()} </div>`; 
                },
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
