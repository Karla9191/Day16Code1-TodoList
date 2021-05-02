import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export function TodosList(props) {
	let [todosList, setTodosList] = useState([]);

	const handleChange = e => {
		setTodosList(e.target.value);
		console.log(handleChange);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(todosList);
		setTodosList("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="container">
				<h1> Tareas por hacer </h1>
				<ul className="list-group">
					<li className="list-group-item">
						<input
							placeholder="Ingrese una tarea"
							value={todosList}
							onChange={handleChange}
							name="tarea"
							className="todoAdd"
						/>
						<button onClick={handleSubmit} className="btnAgregar">
							Agregar Tarea
						</button>
					</li>
				</ul>
			</div>
		</form>
	);
}
