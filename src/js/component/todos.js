import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export function TodosList(props) {
	let [todosList, setTodosList] = useState([
		{ name: " ", done: false },
		{ name: "tarea 2", done: false },
		{ name: "tarea 3", done: false },
		{ name: "tarea 4", done: false }
	]);

	let [nuevaTarea, setNuevaTarea] = useState("");

	const taskList = () => {
		return todosList.map(task => (
			<tr key={task.name}>
				<td>{task.name}</td>
			</tr>
		));
	};

	const handleChange = e => {
		const value = e.target.value;
		setNuevaTarea(value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setNuevaTarea("");
		console.log(nuevaTarea);
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
								value={nuevaTarea}
								onChange={handleChange}
								name="text"
								className="todoAdd"
							/>
							<button
								onClick={handleSubmit}
								value={todosList}
								className="btnAgregar">
								Agregar Tarea
							</button>
						</li>
					</ul>
					<div>
						<table className="table table-striped table-bordered">
							<thead>
								<tr>
									<th>Tarea agregada</th>
									<th>Descartar tarea</th>
								</tr>
							</thead>
							<tbody>{taskList()}</tbody>
						</table>
					</div>
				</div>
			</form>
		</>
	);
}
