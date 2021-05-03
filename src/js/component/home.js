import React, { useState } from "react";

export function Home() {
	const [currentItem, setCurrentItem] = useState("");

	const [itemList, updateItemList] = useState([]);

	const onChangeHandler = e => {
		setCurrentItem(e.target.value);
	};

	const addItemToList = () => {
		// ...itemList muestra o jala items individuales y currentItem es el que se está agregando a la lista.
		updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
		setCurrentItem("");
	};
	//contador
	let countItems = itemList.length;

	const deleteItemFromList = key => {
		const newList = itemList.filter(itemObj => {
			return itemObj.key !== key;
		});
		updateItemList(newList);
	};

	return (
		<div className="container">
			<div className="centered">
				<div className="secondBG">
					<div
						className="row mt-5"
						style={{ display: "inline-block" }}>
						<h1 className="text-center text-capitalize">
							to do list
						</h1>
						<div className="col-sm-12">
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Ingrese tarea"
									value={currentItem}
									onChange={onChangeHandler}
								/>
								<div className="input-group-append">
									<button
										className="btn btn-outline-success"
										type="button"
										onClick={addItemToList}>
										Agregar tarea
									</button>
								</div>
							</div>
							<ul className="list-group mt-5">
								<li className="list-group-item">
									<div>
										{itemList.map(itemObj => {
											return (
												<li
													className="list-group-item"
													key={itemObj.key}>
													<p>{itemObj.item}</p>
													<button
														className="btn btn-danger btn-sm"
														onClick={() =>
															deleteItemFromList(
																itemObj.key
															)
														}>
														Borrar Tarea
													</button>
												</li>
											);
										})}
									</div>
								</li>
							</ul>
							<div>{countItems} of items</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

/*
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { TaskList } from "../component/task";

export function TodosList(props) {
	let [todosList, setTodosList] = useState([{ name: " ", done: false }]);

	let [nuevaTarea, setNuevaTarea] = useState("");

	const taskList = () => {
		return todosList.map(task => (
			<tr key={task.name}>
				<td>{task.name}</td>
			</tr>
		));
	};

	const newTask = taskName => {
		if (!todosList.find(t => t.name == taskName)) {
			setTodosList([...todosList, { name: taskName, done: false }]);
		}
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
*/
