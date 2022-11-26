import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';

import Bargraph from "../components/Bargraph"


function About() {
    
    const [apiString, setApiString] = useState("");
    const [graphValues, setValues] = useState([]);
    const [graphKeys, setKeys] = useState([]);

    useEffect(() => {
        fetchDetails();
    }, [])

    // const colors = ["#f11d28","#fd3a2d","#fe612c","#ff872c","#ffa12c"]


    const fetchDetails = async () => {
        const res = await axios.get("https://www.terriblytinytales.com/test.txt");
        setApiString(res?.data)
        let apiStringNoSC = res?.data.replace(/[^'a-zA-Z0-9]/g, " ")
        let wordsArray = apiStringNoSC.trim().split(/\s+/);
        // trim() removes start and end spaces of the strin
        // \s=blank space, +=repeated space, //=start and end of the expression
        countWords(wordsArray)
    }

    const countWords = (wordsArray) => {
        var wordsObject = {};
        for (var i = 0; i < wordsArray.length; i++) {
            if (wordsObject[wordsArray[i]] === undefined) {
                wordsObject[wordsArray[i]] = 1;
            } else {
                wordsObject[wordsArray[i]] += 1;
            }
        }
        let sortedNestedArray = Object.entries(wordsObject).sort((a, b) => b[1] - a[1])

        let top20 = sortedNestedArray.slice(0, 20)
        let keysVar = []
        let valuesVar = []

        top20.map(([word, count]) => {
            keysVar.push(word)
            valuesVar.push(count)
        })
        setValues(valuesVar);
        setKeys(keysVar);
    }

    return (
        <div className='about-container'>

            {(graphKeys && graphValues) ? (
                <>
                <div className='graph-container'>
                    <Bargraph values={{graphKeys,graphValues}}/>

              
                </div>
                    <div className='text-container'>
                    <p className='apiString'>{apiString}</p>
                    </div>
                </>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}


export default About;
