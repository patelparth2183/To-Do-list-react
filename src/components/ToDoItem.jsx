import { useState } from "react";

function ToDoItem({todo, toggleTodo, deleteTodo, editTodo}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {isEditing ? (
                <>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />

                    <button onClick={() => { editTodo(todo.id, editText); setIsEditing(false);}}>Save</button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
            )}
        </div>
    );
}

export default ToDoItem;