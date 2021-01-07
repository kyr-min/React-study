import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
    let todos = useSelector(state => state.todos);
    let dispatch = useDispatch();
    
    const checkTodo = (todoId) => {
        dispatch({
            type: 'CHECK_TODO',
            id: todoId
        })
    }

    const deleteTodo = (todoId) => {
        dispatch({
            type: 'DELETE_TODO',
            id: todoId
        })
    }

    return (
        <div className="todo">
            {todos.map (todo=> {
                return (
                    <div>
                        <input type="checkox" onChange={checkTodo} value ={todo.done}/>
                        <label>{todo.todo}</label>
                        <button onClick={()=>deleteTodo(todo.id)}>X</button>
                    </div>
                )
            })}
        </div>
    )
};

export default TodoList;