import React, { useState, useEffect } from "react";

export function TodosList() {
	let [nuevaTarea, setNuevaTarea] = useState("");
	let [todosList, setTodosList] = useState([]);

	const handleChange = e => {
		setNuevaTarea(e.target.value);
	};

	const createList = () => {
		if (!todosList.find(t => t.list == nuevaTarea)) {
			setTodosList([...todosList, { list: nuevaTarea, key: Date.now() }]);
		}

		setNuevaTarea("");
	};

	const eliminarLista = key => {
		const nuevaLista = todosList.filter(itemObj => {
			return itemObj.key !== key;
		});
		setTodosList(nuevaLista);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setNuevaTarea("");
		console.log(nuevaTarea);
	};

	let cantidadLista = todosList.length;

	return (
		<>
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

						<button onClick={createList} className="btnAgregar">
							Agregar Tarea
						</button>

						<ul className="list-group mt-5">
							<table className="list-group-item">
								<thead>
									<tr>
										<th>Tarea agregada</th>
									</tr>
								</thead>

								<div className="liP">
									{todosList.map(itemObj => {
										return (
											<li
												className="list-group-item"
												key={itemObj.key}>
												<p>{itemObj.list}</p>
												<button
													className="btnEliminar"
													onClick={() =>
														eliminarLista(
															itemObj.key
														)
													}>
													Eliminar Tarea
												</button>
											</li>
										);
									})}
								</div>
							</table>
						</ul>
						<div>Total de tareas: {cantidadLista}</div>
					</li>
				</ul>
			</div>
		</>
	);
}
