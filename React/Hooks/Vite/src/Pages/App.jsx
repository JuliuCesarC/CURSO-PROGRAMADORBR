import { useState } from "react";
import Card from "../components/card";
import "./App.css";

function App() {
    const [nameTask, setNameTask] = useState('');
    const [taskGroup, setTaskGroup] = useState([])
    
    function addTask() {
      const task = {
        name: nameTask,
        checked: false,
        id: randomID(),
      }
      setTaskGroup(prevTask=>[...prevTask, task])
      document.getElementById('clearInput').value = ''
    }
    function randomID() {
      return Math.random().toString(36).substring(2, 9);
    }
    function removeTask(id) {
      let newTask = taskGroup.filter(task=> task.id !=id)
      setTaskGroup(newTask)
    }
    function completeTask(id){
      console.log(id)
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
                    id="clearInput"
                    placeholder="Tarefas..."
                    onChange={(e) => {
                        setNameTask(e.target.value);
                    }}
                />
                <button type="submit" onClick={addTask}>Adicionar</button>
            </div>
            <div className="cards">
              {taskGroup.map((ts, index)=>(
                <Card 
                  key={index}
                  name= {ts.name}
                  id={ts.id}
                  check={ts.checked}
                  index={index}
                  onRemoveTask={removeTask}
                  onCompleteTask={completeTask}
                />
              ))}
            </div>
        </div>
    );
}

export default App;
