

export function Event({ item }){

    function alertHello(){
        alert('Hello world');
    }

    function displyValue(event){
        console.log(event.target.value);
        console.log(event.nativeEvent.data);
    }

    function displyValue2(param){
        console.log(param);
    }
return (
    <li>
        <input type="text" id="text" onInput={(event) => displyValue(event)} />
        <button onClick={alertHello}>
            say Hello
        </button>
    </li>
)
}