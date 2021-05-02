import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export function TodosList(props) {
	let [todosList, setTodosList] = useState([]);

	const handleChange = e => {
		const value = e.target.value;
		setTodosList(value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(todosList);
		setTodosList("");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="container">
					<h1> Tareas por hacer </h1>
					<ul className="list-group">
						<li className="list-group-item">
							<input
								type="text"
								placeholder="Ingrese una tarea"
								value={todosList}
								onChange={handleChange}
								name="text"
								className="todoAdd"
							/>
							<button
								onClick={handleSubmit}
								className="btnAgregar">
								Agregar Tarea
							</button>
							{/*<ul className="mt-5">
								<li className="list-group-item">{todosList}</li></ul>*/}
						</li>
					</ul>
				</div>
			</form>
		</>
	);
}
