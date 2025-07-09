import logo from './logo.svg';
import './App.css';
import Welcom from './Welcom';
import Hello from "./Hello";
import { Header, Footer} from "./components"
import MainContent from "./components"

function App() {
  
 
  return (
    <div className="App">
      <Welcom name="ahmed" age="24"></Welcom>
            <Welcom name="ahmed" age="24"></Welcom>

      <Welcom name="ahmed" age="24"></Welcom>
<Hello name='adil' age='24'></Hello>
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
