const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CHECK_TODO = 'CHECK_TODO';

let defaultState = {
    todos: [],
    count: 1
}

const todoApp = (state = defaultState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                count: state.count + 1,
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id)
            }

        case CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.id === action.id) todo.done = !todo.done;

                    return todo;
                })
            }

        default:
            return state;
    }
}

export default todoApp;