'use strict';

import React from 'react';
import TodoView from './TodoView.jsx';

let TodoContainer = React.createClass({
	render: function () {
		return (
			<div id="todo-container">
				<form onSubmit={this.props.addTodo}>
					<input type="checkbox" name="check-all" onChange={this.props.checkAll} />
					<input type="text" name="new-todo" />
				</form>
				<ul>
					{this.props.todos.map(function (todo) {
						return <TodoView
									checkTodo={this.props.checkTodo}
									updateTodoText={this.props.updateTodoText}
									todo={todo}
									key={todo.id}/>;
					}.bind(this))}
				</ul>
			</div>
		);
	}
});

export default TodoContainer;
