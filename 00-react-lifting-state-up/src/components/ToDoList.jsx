import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
    {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  // TOP DOWN DATA FLOW
  // Props and data always go down
  // But functions can send data up

  function toggleTaskDone (taskId) {
    const tasksCopy = [...tasks];
    let tasksCompletedCount = tasksCompleted;

    tasksCopy.forEach((task) => {
      if (task._id === taskId) {
        task.isDone = !task.isDone;

        if (task.isDone) {
          tasksCompletedCount++;
        }
        else if (task.isDone === false) {
          tasksCompletedCount--;
        }
      }

      setTasks(tasksCopy);
      setTasksCompleted(tasksCompletedCount);
    })

  }

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />
      
      <div className="todo-container">
        {tasks.map((task) => {
          return <Task 
                    key={task._id}
                    task={task}
                    toggleTask={toggleTaskDone}  
                  /> 
        })}
      </div>
    </div>
  );
}

export default ToDoList;
