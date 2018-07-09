import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './components/todo-list-container'
import './App.css';

const listItems = [
    {
        id: 0,
        label: `Buy Fruits`,
        completed: false
    },
    {
        id: 1,
        label: `Withdraw cash`,
        completed: false
    },
    {
        id: 2,
        label: `Attend react workshop`,
        completed: true
    }
]

ReactDOM.render(
    <div>
        <TodoListContainer items={listItems} />
    </div>
    , document.getElementById('root'));