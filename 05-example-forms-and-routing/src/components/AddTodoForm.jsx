import { useState } from "react";

function AddTodoForm(props) {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleTaskInput = (e) => setTask(e.target.value);
  const handleCompletedInput = (e) => setCompleted(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newTask = { task: task, completed: completed }; // Create a new task object
    props.addNewTask(newTask); // Call the addNewTask function from the App component

    // Reset the form inputs by setting the state back to their initial values
    setTask("");
    setCompleted(false);
  }
  
  return(
    <form 
      onSubmit={handleSubmit} 
      style={{ border: "1px solid black", borderRadius: "5px", padding: "20px"}}
    >
      <label>Task Name</label>
      <input type="text" name="task" value={task} onChange={handleTaskInput} />
      <br />

      <label>Task Completed</label>
      <input type="checkbox" name="completed" checked={completed} onChange={handleCompletedInput} />
      <br />
      <button type="submit">Create Task</button>
    </form>
  )
}

export default AddTodoForm;