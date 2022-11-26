import React from 'react';
import {Pie,Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Piechart(props) {
    let {graphKeys, graphValues} = props.values
    let colors = [
        "#00ab00",
        "#5200a1",
        "#00a200",
        "#d464ff",
        "#009d35",
        "#000980",
        "#ee841e",
        "#002b90",
        "#256800",
        "#ffb8ff",
        "#9a0000",
        "#00ffff",
        "#ff994d",
        "#00eeff",
        "#0f0b29",
        "#ffaa99",
        "#00304d",
        "#ed7da0",
        "#00748c",
        "#8d7996"
    ]
    return (
        <>
            <Doughnut className="graph pie-chart"
                height={200}
                width={500}
                data={{
                    labels: graphKeys,
                    datasets: [{
                        label: "Word Count",
                        data: graphValues,
                        backgroundColor: colors,
                    }]
                }}
            />
        </>
    );
}

export default Piechart;