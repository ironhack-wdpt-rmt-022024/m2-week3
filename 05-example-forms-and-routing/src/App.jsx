import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import TodoListPage from './pages/TodoListPage';
import TodoDetailsPage from './pages/TodoDetailsPage';
import tasksJSON from './tasks.json';

function App() {
  const [tasks, setTasks] = useState(tasksJSON);

  const addNewTask = (newTask) => {
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<TodoListPage tasks={tasks} addNewTask={addNewTask} />} />
        <Route path="/todos/:id" element={<TodoDetailsPage tasks={tasks} />} />
      </Routes>
    </>
  )
}

export default App
