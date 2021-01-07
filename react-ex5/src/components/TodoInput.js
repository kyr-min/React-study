import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoInput = () => {
    let [todo, setTodo] = useState('');
    
    let dispatch = useDispatch();
    let count = useSelector(state => state.count);

    const inputChange = (e) => {
        setTodo(e.target.value);
    }

    const addTodo = () => {
        if(todo === ''){
            alert('할 일을 입력해주세요.');
            return ;
        }

        setTodo('');

        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: count,
                done: false,
                todo: todo
            }
        })
    }

    return (
        <div className="todo-input">
            <input value={todo} onChange={inputChange} />
            <button onClick={addTodo}>추가</button>
        </div>
    )
};

export default TodoInput;