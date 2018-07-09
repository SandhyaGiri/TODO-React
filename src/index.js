import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './components/todo-list-container'
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
        <TodoListContainer items={listItems} />
    </div>
    , document.getElementById('root'));