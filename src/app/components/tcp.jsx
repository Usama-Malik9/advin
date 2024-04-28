import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Tcp = () => {
    const pieChartData = [
        { name: 'Category 1', y: 20 },
        { name: 'Category 2', y: 30 },
        { name: 'Category 3', y: 50 }
    ];

    const options = {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Pr'
        },
        series: [
            {
                type: 'area',
                name: 'Data',
                data: pieChartData
            }
        ],
        legend: {
            enabled: true
        },
        credits: {
            enabled: false
        },
        plotOptions: {

            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %'
                }
            }
        },
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

export default Tcp