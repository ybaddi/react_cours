import logo from './logo.svg';
import './App.css';
import Welcom from './Welcom';
import Hello from "./Hello";
import { Header, Footer} from "./components"
import MainContent from "./components"
import { Fragment } from 'react/jsx-runtime';

function App() {
  
 
  return (
    <div className="App">
      {/* <Welcom name="ahmed" age="24">rabat</Welcom> */}
      {/* <Welcom name="ahmed" age="24">fez</Welcom> */}

      {/* <Welcom name="ahmed" age="24">
        <div>Casablanca</div>
        <div>Qods</div>
        <div>145</div>
      </Welcom> */}

      <Welcom name="ahmed" age="24">
        <Fragment key="ville">Casablanca</Fragment>
        <Fragment key="boulvard">Qods</Fragment>
        <Fragment key="cp">145</Fragment>
      </Welcom>
      
      <Hello name='adil' age='24'>Casablanca</Hello>
      
      <Hello name='hicham' age='24'>
        

      </Hello>

     
     <Header></Header>
     <MainContent />
     <Footer></Footer>
     
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
