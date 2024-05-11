import AddTodoForm from '../components/AddTodoForm';
import { Link } from 'react-router-dom';

function TodoListPage (props) {

  return(
    <div>
      <AddTodoForm addNewTask={props.addNewTask} />

      {props.tasks.map((oneTask) => {
        return (
          <Link 
            key={oneTask.id}
            to={`/todos/${oneTask.id}`}
          >
            <p>{oneTask.task} - {oneTask.completed ? "✅" : "❌"}</p>
          </Link>
        )
      })}

    </div>
  )
}

export default TodoListPage;