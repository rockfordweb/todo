'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import TodoContainer from './TodoContainer.jsx';

let todos = window.todos = [
    {
        text: 'thing',
        id: 0,
        checked: false
    },
    {
        text: 'stuff',
        id: 1,
        checked: 'checked'
    }
];
let App = React.createClass({
    handleClearClick: function (event) {
        console.log(event);
    },
    render: function () {
        return (
            <div id="main">
                <header>
                    <h1>TODO Application</h1>
                </header>
                <TodoContainer todos={todos}/>
                <footer>
                    <span>1 item left</span>
                    <div>
                        <span className="selector">All</span>
                        <span className="selector">Active</span>
                        <span className="selector">Completed</span>
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
