import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

    render() {
        const { label, completed } = this.props
        return (
            <div>
                <input type="checkbox" checked={completed}/>
                <label>{label}</label>
            </div>
        )
    }
}

TodoItem.propTypes = {
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool 
}

export default TodoItem