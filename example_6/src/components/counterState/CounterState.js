import { useState , useEffect } from "react";

export default function CounterState() {

    var [counter, setCounter]= useState(0);
    var [signe, setSigne]= useState('nul');


    useEffect(() => {
        console.log('effect');
        if(counter > 0)
            setSigne('positif');
        else if (counter < 0)
            setSigne('negatif');
        else{
            setSigne('nul');
        }
    })

    function updateSigne(val){
        if(val > 0)
            setSigne('positif');
        else if (val < 0)
            setSigne('negatif');
        else{
            setSigne('nul');
        }
    }
    const decrementer = () => {
        console.log(counter);
        const newCounter = counter - 1;
        setCounter(newCounter);
        // setCounter(counter-1);
        // updateSigne(newCounter);
        console.log(counter);
    }

    const reset = () => {
        console.log(counter);
        setCounter(0);
        // counter=0;
        // updateSigne(0);
        console.log(counter);
    }

    const incrementer = () => {
        console.log(counter);
        const newCounter = counter + 1;
        setCounter(newCounter);
        // setCounter(counter+1);
        // updateSigne(newCounter);
        console.log(counter);
    }

    return (
        <div>
            <h1>Counter CNSS</h1>
            {/* <h2>{counter > 0 ? 'positif' : counter < 0 ? 'negative' : 'nul'} : {counter}</h2> */}
            <h2>{signe} : {counter}</h2>

            <button onClick={decrementer} > - </button>
            <button onClick={reset} > R </button>
            <button onClick={incrementer} > + </button>
        </div>
    )
}