import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class TodoItem extends Component {

    render() {
        const { id, label, completed, onComplete, onDelete } = this.props
        const className = classNames('todo-list-item', {
            'todo-list-item--completed': completed
        })
        return (
            <div className={className}>
                <input type="checkbox" checked={completed} onChange={(e) => onComplete(id, !!e.target.checked)}/>
                <label>{label}</label>
                <button className="todo-list-item__deleteBtn" onClick={(e) => onDelete(id)}/>
            </div>
        )
    }
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    onComplete: PropTypes.func,
    onDelete: PropTypes.func
}

export default TodoItem