'use strict';

import React from 'react';

let TodoView = React.createClass({
	updateTodoItem: function (event) {
		console.log('update todo item', event);
	},
	render: function () {
		return (
			<li>
				<form onSubmit={this.updateTodoItem}>
					<input type="checkbox" name="check-item" onChange={this.checkAll} checked={this.props.todo.checked} />
					<input type="text" name="todo" value={this.props.todo.text} />
				</form>
			</li>
		);
	}
});

export default TodoView;
