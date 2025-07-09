import logo from './logo.svg';
import './App.css';
import Welcom from './Welcom';

function App() {
  
 
  return (
    <div className="App">
      <Welcom name="ahmed" age="24"></Welcom>
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
