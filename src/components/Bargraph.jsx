import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Bargraph(props) {
    let {graphKeys, graphValues, data} = props.values
    
    const generateColorArray = ()=>{
        let colors=[]

        for(var i=110;i<248;i+=6){
            colors.push(`rgb(255,${i},0)`)
        }
        return colors;
    }
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
                        backgroundColor: generateColorArray(),
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