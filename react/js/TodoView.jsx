'use strict';

import React from 'react';

let TodoView = React.createClass({
	render: function () {
		return (
			<li className={this.props.todo.hidden ? 'hidden' : ''}>
				<form className={this.props.todo.id}>
					<input type="checkbox" name="check-item" onChange={this.props.checkTodo} checked={this.props.todo.checked} />
					<input type="text" name="todo" onChange={this.props.updateTodoText} value={this.props.todo.text} />
				</form>
			</li>
		);
	}
});

export default TodoView;
