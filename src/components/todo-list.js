import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todo-item'
import { TodoItemType } from './todo-item-type'

const TodoStatus = ({items}) => {
    const completedItems = items.filter(item => item.completed === true)
    const pendingItems = items.filter(item => item.completed === false)
    return (
        <div className="todo-status">
            <label>{completedItems.length} {completedItems.length <=1 ? `item` : `items`} completed</label>
            <span> , </span>
            <label>{pendingItems.length} {pendingItems.length <= 1 ? `item` : `items`} left</label>
        </div>
    )
}

class TodoList extends Component {

    render() {
        const { items, onItemComplete, onItemDelete } = this.props
        if (items.length) {
            let listItems = items.map((item) => {
                return (
                    <li key={item.id}>
                        <TodoItem id={item.id} label={item.label} completed={item.completed} onComplete={onItemComplete} onDelete={onItemDelete}/>
                    </li>
                )
            })
            return (
                <div>
                    <ul className="todo-list">
                        {listItems}
                    </ul>
                    <TodoStatus items={items} />
                </div>
            )
        } else {
            // Empty todo list
            return null
        }
    }
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(TodoItemType),
    onItemComplete: PropTypes.func.isRequired,
    onItemDelete: PropTypes.func.isRequired
}

export default TodoList
