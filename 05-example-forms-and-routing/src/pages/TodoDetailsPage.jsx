import { useParams } from "react-router-dom";

function TodoDetailsPage (props) {
  // The tasks list is passed as a prop from App.jsx
  const { tasks } = props;

  // The id of the task is passed as a route URL parameter "id": /todos/:id
  const { id } = useParams();

  // We use the find method to get the task that matches the id
  const selectedTask = tasks.find((task) => task.id === id);

  // We then render the task details in the JSX
  return (
    <div>
      <h2>Todo Details Page</h2>
      <p><b>Task:</b> {selectedTask.task}</p>
      <p>{selectedTask.completed ? "Completed ✅" : "Pending ❌"}</p>
    </div>
  )

}

export default TodoDetailsPage;