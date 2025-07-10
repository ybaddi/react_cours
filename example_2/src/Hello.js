import React , {Component} from 'react'

class Hello extends Component{


    constructor(props){
super(props);
// const [ville, boulvard, num] = props.children
// const ville = props.children.find(item => item.key == "ville");
    }

    render(){
        return (
            <div>
                <p>
                    hello {this.props.name} 
                    i have {this.props.age} year
                    from {this.ville} , {this.boulvard} , {this.num}

                </p>
            </div>
        )
    }
}

export default Hello;