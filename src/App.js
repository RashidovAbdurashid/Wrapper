import { useState } from "react";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <Input addTask={addTask} />

      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
