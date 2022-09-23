import { useState } from "react";
import Card from "../components/card";
import "./App.css";

function App() {
    const [nameTask, setNameTask] = useState('');
    const [taskGroup, setTaskGroup] = useState([{Name:'Teste'},{Name:'segundo'}])
    function addTask() {
      const task = {
        name: nameTask,
        checked: false,
        id: "",
      }
      setTaskGroup((prevTask)=>{
        return{...prevTask, }
      })
      console.log(taskGroup)
    }
    return (
        <div className="container">
            <header>
                <h1>ToDo List</h1>
            </header>
            <div className="Add" action="">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Tarefas..."
                    onChange={(e) => {
                        setNameTask(e.target.value);
                    }}
                />
                <button type="submit" onClick={addTask}>Adicionar</button>
            </div>
            <div className="cards">
                <Card></Card>
            </div>
        </div>
    );
}

export default App;
