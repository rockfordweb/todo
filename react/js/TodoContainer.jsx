'use strict';

import React from 'react';
import TodoView from './TodoView.jsx';

let TodoContainer = React.createClass({
	render: function () {
		return (
			<div id="todo-container" className="col-sm-12">
				<pre>
				<form className="input-group form-group" onSubmit={this.props.addTodo}>
					<span className="input-group-addon"><input type="checkbox" name="check-all" onChange={this.props.checkAll} /></span>
					<input className="form-control" type="text" name="new-todo" />
				</form>
				</pre>
				<ul className="list-group list-unstyled">
					{this.props.todos.map(function (todo) {
						return <TodoView
									className="list-group-item"
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
