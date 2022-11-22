import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import { createStore } from "redux"; //////////////////////

function App() {
  return (
    <div className="App">
      <Header />
			<Counter />
    </div>
  );
}

export default App;
