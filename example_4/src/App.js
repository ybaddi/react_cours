import logo from './logo.svg';
import './App.css';
import { Primeur } from './components/primeur/primeur';
import { Event } from './components/event/Event';
import Hello from './components/hello/Hello';
import Calculette from './components/calculette/Calculette';
import LifeCycle from './components/lifeCycle/LifeCycle';

function App() {
  return (
    <div>
      <Hello>baddi</Hello>
      <Primeur />
      <Event />
      <Calculette/>
      <LifeCycle />
      </div>
  );
}

export default App;
