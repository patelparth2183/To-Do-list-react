import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";


function App() {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");
	const addTodo = () => {
		if (task.trim() === "") {
			return;
		}

		const newTodo = {
			id: Date.now(),
			text: task,
			completed: false
		};

		setTodos([...todos, newTodo]);
		setTask("");
	};

	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editTodo = (id, newText) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, text: newText } : todo
			)
		);
	};

	return (
		<div className="app">
			<Header />
			<div className="add-task">
				<input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)} />
				<button onClick={addTodo}>Add Task</button>
			</div>
			<ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
		</div>
	);
}

export default App;