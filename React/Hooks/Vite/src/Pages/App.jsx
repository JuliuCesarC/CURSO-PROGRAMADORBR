import Card from '../components/card'
import "./App.css";

function App() {
    return (
        <div className="container">
            <header>
                <h1>ToDo List</h1>
            </header>
            <form className="Add" action="/">
                <input type="text" name="" id="" placeholder="Tarefas..." />
                <button type="submit">Adicionar</button>
            </form>
            <div className="cards">
              <Card></Card>
            </div>
        </div>
    );
}

export default App;
