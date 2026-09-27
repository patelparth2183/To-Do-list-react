import ToDoItem from "./ToDoItem";

function ToDoList({ todos, toggleTodo, deleteTodo, editTodo }) {
    return (
        <div>
            {
                todos.length === 0 ? (
                    <p>No tasks yet. Add your first task!</p>
                ) : (
                    todos.map((todo) => (
                        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
                    ))
                )
            }
        </div>
    );
}

export default ToDoList;