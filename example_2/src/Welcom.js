import React from 'react'

function Welcom(props){
    console.log(props.children);
    const ville = props.children.find(item => item.key == "ville");
    const boulvard = props.children.find(item => item.key == "boulvard");
    const cp = props.children.find(item => item.key == "cp");


    // const [ville, boulvard, cp] = props.children ;
    return <div><h1>Welcom {props.name} a {props.age} annees from {ville} et {boulvard} et {cp} </h1></div>
}

export default Welcom;