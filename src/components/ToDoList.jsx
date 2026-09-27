import ToDoItem from "./ToDoItem";

function ToDoList({todos, toggleTodo}) {
    return (
        <div>
            <h2>Tasks</h2>
            {
                todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))
            }
        </div>
    );
}

export default ToDoList;