import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    const trimmedTask = newTask.trim();
    if (trimmedTask) {
      setTasks([...tasks, trimmedTask]);
      setNewTask('');
    }
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h2>Todo List App</h2>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={clearAll}>Clear All</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.map((task, index) => <li key={index}>{task}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
