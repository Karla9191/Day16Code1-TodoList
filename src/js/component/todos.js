import React, { useState } from "react";

export function TodosList() {
	let [todosList, setTodosList] = useState([]);

	return (
        <h1> Tareas por hacer </h1>
		<div className="container">
            <button className="btn btn-primary" type="button">OK</button>
			<ul class="list-group">
				<li class="list-group-item"></li>
				<li class="list-group-item"></li>
				<li class="list-group-item"></li>
				<li class="list-group-item"></li>
				<li class="list-group-item"></li>
			</ul>
		</div>
	);
}
