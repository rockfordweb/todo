'use strict';

import React from 'react';
import TodoView from './TodoView.jsx';

let TodoContainer = React.createClass({
	addTodo: function (event) {
		event.preventDefault();
		console.log('adding a todo', event);
		// TODO: make this work
		this.props.todos.push({
			id: this.props.todos.length,
			text: event.target.querySelector('input[type="text"]').value,
			checked: false
		});
		this.render();
	},
	checkAll: function (event) {
		console.log('checking all todos', event);
		// TODO: make this work
	},
	render: function () {
		return (
			<div id="todo-container">
				<form onSubmit={this.addTodo}>
					<input type="checkbox" name="check-all" onChange={this.checkAll} />
					<input type="text" name="new-todo" />
				</form>
				<ul>{this.props.todos.map(function (todo) {
					return <TodoView todo={todo} />;
				})}</ul>
			</div>
		);
	}
});

export default TodoContainer;
