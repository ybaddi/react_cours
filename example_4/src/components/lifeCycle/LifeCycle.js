import React , {Component, components} from 'react'

class LifeCycle extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log('mounting')
    }

    componentDidMount(){
        console.log('mounted')
    }

    componentDidUpdate(){
        console.log('updated')
    }


    handleClick(){
console.log('update')
    }


    render(){
        return (<div>
            Hello world
            <button type="button" onClick={this.handleClick}>Update Component</button>
        </div>
        )
    }
}

export default LifeCycle;