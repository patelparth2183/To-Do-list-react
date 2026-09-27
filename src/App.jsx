import { useState } from "react";
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

	return (
		<div>
			<Header />
			<input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)} />
			<button onClick={addTodo}>Add Task</button>
			<ToDoList todos={todos} toggleTodo={toggleTodo} />
		</div>
	);
}

export default App;