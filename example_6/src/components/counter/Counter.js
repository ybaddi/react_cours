export default function Counter() {

    var counter = 0;

    const decrementer = () => {
        console.log(counter);
        counter--;
        console.log(counter);
    }

    const reset = () => {
        console.log(counter);
        counter=0;
        console.log(counter);
    }

    const incrementer = () => {
        console.log(counter);
        counter++;
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