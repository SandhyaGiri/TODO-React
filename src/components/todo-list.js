import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todo-item'

class TodoList extends Component {

    render() {
        const { items, onItemComplete } = this.props
        if (items.length) {
            let listItems = items.map((item, index) => {
                return (
                    <li key={index}>
                        <TodoItem id={index} label={item.label} completed={item.completed} onComplete={onItemComplete}/>
                    </li>
                )
            })
            return (
                <ul className="todo-list">
                    {listItems}
                </ul>
            )
        } else {
            // Empty todo list
            return null
        }
    }
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(TodoItem.propTypes)),
    onItemComplete: PropTypes.func.isRequired
}

export default TodoList
