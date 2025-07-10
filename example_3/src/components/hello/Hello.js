import './Hello.css'
import classNames from 'classnames'


function Hello(props){
    const message = props.children;
    const classes = classNames(
        'gray' ,
        {'rouge' : message.length % 2 === 0 },
        {'blue' : message.length % 2 !== 0 }
        );

        const numbers = [1,2,3,5,6,7,9,0];
        const personnes = [
            {id:1, name : 'yassine', age:24},
            {id:2, name : 'yassine', age:25},
            {id:3, name : 'yassine', age:26},
            {id:4, name : 'yassine', age:27},
            {id:5, name : 'yassine', age:28}
        ];

        if(numbers[0] % 2 == 0) {
return <p>{numbers[0]} est pair</p>
}

   return (
    // <p className={`gray ${message.length % 2 === 0 ? 'rouge' : 'blue'}`}>
    <div>
    <p className = {classes}>
      {message}
    </p>
      <ul>
        {numbers.map((number,index) => <li id={index+1} key={index}>{index} : {number}</li>)}
      </ul>

      <ul>
        {personnes.map(({name,age},index) => <li id={index+1} key={index}>{index} :  {name} -- {age}</li>)}
      </ul>

      </div>
   )
}

export default Hello;