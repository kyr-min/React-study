import TodoInput from './TodoInput';
import TodoList from './TodoList';
import '../style.css';

const Container = () => {
    return (
        <div className="todo">
            <TodoInput />
            <TodoList />
        </div>
    )
};

export default Container;