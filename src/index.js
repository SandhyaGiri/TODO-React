import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoListContainer from './components/todo-list-container'
import './App.css'
import { todoAppReducer } from './redux/reducers'

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

const store = createStore(todoAppReducer, listItems)

ReactDOM.render(
    <Provider store={store}>
        <TodoListContainer items={listItems} />
    </Provider>
    , document.getElementById('root'));