import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ColumnStackChart = () => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'bottom',
            y: 25,
            floating: true,
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [
            {
                name: 'John',
                data: [5, 3, 4, 7, 2]
            },
            {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            },
            {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }
        ]
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default ColumnStackChart;
