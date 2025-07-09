import React from 'react'

class Hello extends React.Component{


    constructor(props){
super(props);
    }

    render(){
        return (
            <div>
                <p>
                    hello {this.props.name} i have {this.props.age} year 
                </p>
            </div>
        )
    }
}

export default Hello;