import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class TodoItem extends Component {

    render() {
        const { id, label, completed, onComplete } = this.props
        const labelClass = classNames('todo-list-item', {
            'todo-list-item--completed': completed
        })
        return (
            <div>
                <input type="checkbox" checked={completed} onChange={(e) => onComplete(id, !!e.target.checked)}/>
                <label className={labelClass}>{label}</label>
            </div>
        )
    }
}

TodoItem.propTypes = {
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    onComplete: PropTypes.func 
}

export default TodoItem