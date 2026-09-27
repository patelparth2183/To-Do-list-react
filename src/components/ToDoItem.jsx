function ToDoItem({todo, toggleTodo}) {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
            <span>{todo.text}</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default ToDoItem;