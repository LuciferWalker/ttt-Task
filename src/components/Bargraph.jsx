import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Bargraph(props) {
    let {graphKeys, graphValues, data} = props.values
    let colors = ['#FF4500','#FF8C00',' #FF5E0E','#FF6347','#E26310','#F5761A',
'#FD673A','#FFA836','#ED9121']
    return (
        <>
            <Bar className="bar-graph"
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

                options = {{
                    responsive:true,
                    plugins: {  
                      legend: {
                        labels: {
                          color: "white",  
                        }
                      }
                    },
                    scales: {
                      x: {
                        title:{
                            display:true,
                            text:"Word",
                            color:"white",
                            font:{
                                size:30
                            }
                        },
                        ticks: {
                            color: "white",
                        }
                    },
                    y: {
                        title:{
                            display:true,
                            text:"Count",
                            color:"white",
                            font:{
                                size:30
                            }
                        },
                      ticks: {
                          color: "white"
                      }
                  }
                    }
                  }}
            />
        </>
    );
}

export default Bargraph;