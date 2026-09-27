import ToDoItem from "./ToDoItem";

function ToDoList({todos, toggleTodo, deleteTodo, editTodo}) {
    return (
        <div>
            <h2>Tasks</h2>
            {
                todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
                ))
            }
        </div>
    );
}

export default ToDoList;