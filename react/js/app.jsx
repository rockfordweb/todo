'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import TodoContainer from './TodoContainer.jsx';

let todos = window.todos = [
    {
        text: 'todo item 1',
        id: 0,
        checked: false,
        hidden: false
    },
    {
        text: 'stuff',
        id: 1,
        checked: 'checked',
        hidden: false
    }
];
let App = React.createClass({
    getInitialState: function () {
        return {
            todos: todos,
            nextId: todos.length
        };
    },
    filterTodos: function (event) {
        let filter = event.target.className.replace(' selector', '');
        let todos = this.state.todos;

        switch (filter) {
            case 'all':
                todos.map(function (todo) {
                    todo.hidden = false;
                });
                break;
            case 'active':
                todos.map(function (todo) {
                    todo.hidden = !todo.checked ? false : true;
                });
                break;
            case 'completed':
                todos.map(function (todo) {
                    todo.hidden = todo.checked ? false : true;
                });
                break;
        }

        this.setState({ todos: todos });
    },
    handleClearClick: function (event) {
        let todos = this.state.todos;

        this.setState({
            todos: todos.filter(function (todo) {
                return !todo.checked;
            })
        });
    },
    addTodo: function (event) {
        event.preventDefault();

        let todos = this.state.todos;
        let textBox = event.target.querySelector('input[type="text"]');

        todos.push({
            id: this.state.nextId,
            text: textBox.value,
            checked: false
        });

        this.setState({ todos: todos, nextId: ++this.state.nextId });

        textBox.value = '';
    },
    checkAll: function (event) {
        let todos = this.state.todos;

        todos.forEach(function (todo) {
            todo.checked = event.target.checked;
        });

        this.setState({ todos: todos });
    },
    updateTodoText: function (event) {
        event.preventDefault();

        let text = event.target.value;
        let todos = this.state.todos;

        todos.map(function (todo) {
            if (todo.id == event.target.parentNode.className) {
                todo.text = text;
            }
        });

        this.setState({ todos: todos });
    },
    checkTodo: function (event) {
        let checked = event.target.checked;
        let todos = this.state.todos;

        todos.map(function (todo) {
            if (todo.id == event.target.parentNode.className) {
                todo.checked = checked;
            }
        });

        this.setState({ todos: todos });
    },
    render: function () {
        return (
            <div id="main">
                <header>
                    <h1>TODO Application</h1>
                </header>
                <TodoContainer
                    addTodo={this.addTodo}
                    checkAll={this.checkAll}
                    updateTodoText={this.updateTodoText}
                    checkTodo={this.checkTodo}
                    todos={this.state.todos}/>
                <footer>
                    <span>{this.state.todos.filter(function (todo) {
                        return !todo.checked;
                    }).length} item left</span>
                    <div>
                        <span onClick={this.filterTodos} className="all selector">All</span>
                        <span onClick={this.filterTodos} className="active selector">Active</span>
                        <span onClick={this.filterTodos} className="completed selector">Completed</span>
                    </div>
                    <a onClick={this.handleClearClick}>Clear completed</a>
                </footer>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
