import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Linechart(props) {
    let {graphKeys, graphValues, data} = props.values
    return (
        <>
        <Line className=" graph line-chart"
            height={200}
            width={500}
            data={{
                labels: graphKeys,
                datasets: [{
                    label: "Word Count",
                    data: graphValues,
                    backgroundColor: ['rgb(255, 175, 0)'],
                }]
            }}
        />
    </>
    );
}

export default Linechart;