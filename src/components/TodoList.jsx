import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
