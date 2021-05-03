import React from "react";

export const TaskList = props => (
	<tr key={props.task.name}>
		<td>{props.task.name}</td>
		<td>
			<input type="checkbox" checked={props.task.done}></input>
		</td>
	</tr>
);
