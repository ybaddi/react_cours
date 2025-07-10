import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter'
import CounterState from './components/counterState/CounterState';
import ButtonSwitcher from './components/buttonSwitcher/ButtonSwitcher.js'

function App() {
  return (
    <div>
      <Counter/>
      <ButtonSwitcher/>

      </div>
  );
}

export default App;
