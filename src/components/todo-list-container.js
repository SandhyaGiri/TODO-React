import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from './todo-list'
import { TodoItemType } from './todo-item-type'
import { connect } from 'react-redux'
import {
    addTodoItem as addTodoItemAction,
    completeTodoItem as completeTodoItemAction,
    deleteTodoItem as deleteTodoItemAction
} from '../redux/actions/action-creaters'

class TodoListContainer extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onKeyPress = this.onKeyPress.bind(this)
        this.state = {
            todoEntry: ``
        }
    }

    onChange(e) {
        if (e.target) {
            this.setState({ todoEntry : e.target.value })
        }
    }

    onKeyPress(e) {
        if (e.target && e.which === 13) {
            this.props.addTodoItem(this.state.todoEntry)
            this.setState({
                todoEntry: ``
            })
        }
    }

    render() {
        const { todoEntry } = this.state
        const { items, completeTodoItem, deleteTodoItem } = this.props

        return (
            <div className="todo-list-container">
                <div>
                    <label htmlFor="addTodo"></label>
                    <input type="text" id="addTodo" placeholder="What needs to be done?"
                        value={todoEntry} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
                </div>
                <TodoList items={items} onItemComplete={completeTodoItem} onItemDelete={deleteTodoItem}/>
            </div>
        )
    }
}

TodoListContainer.propTypes = {
    items: PropTypes.arrayOf(TodoItemType),
    addTodoItem: PropTypes.func,
    completeTodoItem: PropTypes.func,
    deleteTodoItem: PropTypes.func
}

export default connect(
    //_mapStateToProps
    state => ({items: state}),
    //_mapDispatchToProps
    dispatch => ({
        addTodoItem: (itemLabel) => dispatch(addTodoItemAction(itemLabel)),
        completeTodoItem: (itemId, completed) => dispatch(completeTodoItemAction(itemId, completed)),
        deleteTodoItem: (itemId) => dispatch(deleteTodoItemAction(itemId))
    })
  )(TodoListContainer)