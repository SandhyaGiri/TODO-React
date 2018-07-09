import * as actions from './actions'

export const addTodoItem = (itemLabel) => ({
    type: actions.ADD_TODO_ITEM,
    itemLabel
})

export const completeTodoItem = (itemId, completed) => ({
    type: actions.COMPLETE_TODO_ITEM,
    itemId,
    completed
})

export const deleteTodoItem = (itemId) => ({
    type: actions.DELETE_TODO_ITEM,
    itemId
})