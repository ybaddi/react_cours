import { useState } from "react";

export default function CounterState() {

    var [counter, setCounter]= useState(0);

    const decrementer = () => {
        console.log(counter);
        setCounter(counter-1);
        setCounter(counter-1);
        console.log(counter);
    }

    const reset = () => {
        console.log(counter);
        setCounter(0);
        // counter=0;
        console.log(counter);
    }

    const incrementer = () => {
        console.log(counter);
        setCounter(counter+1);
        setCounter(counter+1);
        console.log(counter);
    }

    return (
        <div>
            <h1>Counter CNSS</h1>
            <h2>{counter}</h2>
            <button onClick={decrementer} > - </button>
            <button onClick={reset} > R </button>
            <button onClick={incrementer} > + </button>
        </div>
    )
}