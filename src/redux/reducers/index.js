import * as actions from '../actions/actions'

export const todoAppReducer = (state = [], action) => {
    let nextState = Object.assign([], state)
    switch(action.type) {
        case actions.ADD_TODO_ITEM:
            const itemLabel = action.itemLabel
            return [
                {
                    id: nextState.length+1,
                    label: itemLabel,
                    completed: false
                },
                ...nextState
            ]
        case actions.COMPLETE_TODO_ITEM:
            const { itemId, completed } = action
            nextState.forEach(item => {
                if(item.id === itemId) {
                    item.completed = completed
                }
            })
            return nextState
        case actions.DELETE_TODO_ITEM:
            nextState = nextState.filter((item) => item.id !== action.itemId)
            return nextState
        default:
            return nextState
    }
}