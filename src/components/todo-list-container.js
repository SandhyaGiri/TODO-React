import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from './todo-list'
import { TodoItemType } from './todo-item-type'

class TodoListContainer extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onKeyPress = this.onKeyPress.bind(this)
        this.state = {
            items: props.items,
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
            const newTodoItem = {
                id: this.state.items.length+1,
                label: this.state.todoEntry,
                completed: false
            }
            // const newItems = Object.assign( [], this.state.items)
            // newItems.push(newTodoItem)
            this.state.items.push(newTodoItem)
            this.setState({
                items: this.state.items,
                todoEntry: ``
            })
        }
    }

    _onItemComplete(itemId, completed) {
        const newItems = Object.assign([], this.state.items)
        newItems.forEach(item => {
            if(item.id === itemId) {
                item.completed = completed
            }
        });
        
        this.setState({
            items: newItems
        })
    }

    _onItemDelete(itemId) {
        let newItems = Object.assign([], this.state.items)
        newItems = newItems.filter((item) => item.id !== itemId)
        
        this.setState({
            items: newItems
        })
    }

    render() {
        const { items, todoEntry } = this.state

        return (
            <div className="todo-list-container">
                <div>
                    <label htmlFor="addTodo"></label>
                    <input type="text" id="addTodo" placeholder="What needs to be done?"
                        value={todoEntry} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
                </div>
                <TodoList items={items} onItemComplete={this._onItemComplete.bind(this)} onItemDelete={this._onItemDelete.bind(this)}/>
            </div>
        )
    }
}

TodoListContainer.propTypes = {
    items: PropTypes.arrayOf(TodoItemType)
}

export default TodoListContainer
