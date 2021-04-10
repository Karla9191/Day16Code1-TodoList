import React from "react";
import PropTypes from "prop-types";

function Todo(props) {
	//console.log("props", props);
	const deleteItemFromList = key => {
		const newList = props.itemList.filter(itemObj => {
			return itemObj.key !== key;
		});
		props.updateItemList(newList);
	};
	return (
		<div>
			{props.itemList.map(itemObj => {
				return (
					<li className="list-group-item" key={itemObj.key}>
						<p>{itemObj.item}</p>
						<button
							className="btn btn-danger btn-sm"
							onClick={() => deleteItemFromList(itemObj.key)}>
							Borrar Tarea
						</button>
					</li>
				);
			})}
		</div>
	);
}

Todo.propTypes = {
	itemList: PropTypes.string,
	itemObj: PropTypes.string,
	updateItemList: PropTypes.string
};

export default Todo;
