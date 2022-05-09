import { useState } from "react";
import Charts from "react-apexcharts";


function BarGraph({className, data, isVertical}){
    const [barData, setBarData] = useState({
        series: [{
            data: Object.values(data || {}),
            name: ''
        }],
        chartOptions: {
            labels: Object.keys(data || {})
        },

        options: {
            labels: Object.keys(data || {}),
            chart: {
                id: 'bar-chart'
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: isVertical ? false:true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: Object.keys(data || {}),
                labels: {
                    formatter: function (value) {
                        return value.toLocaleString();
                    }   
                },
                logarithmic: isVertical ? true:false
            },

            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value.toLocaleString();
                    }   
                },
                logarithmic: isVertical ? true:false
            },
            
            fill: {
                colors: ["#047130"]
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
        <Charts options={barData.options} series={barData.series} type="bar" height={300}/>
        </div>
    );
}


export default BarGraph;