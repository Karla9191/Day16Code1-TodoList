import React, { useState } from "react";

export function TodosList() {
	let [todosList, setTodosList] = useState([]);

	return (
		<div className="container">
			<h1> Tareas por hacer </h1>
			<ul className="list-group">
				<li className="list-group-item"></li>
			</ul>
		</div>
	);
}
