import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list'
import './App.css';

const listItems = [
    {
        label: `Buy Fruits`,
        completed: false
    },
    {
        label: `Withdraw cash`,
        completed: false
    },
    {
        label: `Attend react workshop`,
        completed: true
    }
]

ReactDOM.render(
    <div>
        <TodoList items={listItems} />
    </div>
    , document.getElementById('root'));