import { useEffect, useState } from "react";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks && JSON.parse(savedTasks).length > 0) return;

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        const titles = data.map((todo) => todo.title);
        setTasks(titles);
      })
      .catch((error) => console.error("xatolik:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
  };

  const editTask = (indexToEdit, newTask) => {
    setTasks(
      tasks.map((task, index) => (index === indexToEdit ? newTask : task))
    );
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <Input addTask={addTask} />


      <div className="cards-grid">
        {tasks.map((task, index) => (
          <div className="task-card" key={index}>
            <div className="card-content">
              <p>{task}</p>
            </div>
            <button className="edit-btn" onClick={() => {
              const newTask = prompt("Edit task:", task);
              if (newTask !== null) {
                editTask(index, newTask);
              }
            }}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
