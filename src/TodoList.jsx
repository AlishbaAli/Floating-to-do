import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types';

export function TodoList({todos, toggleTodo, deleteTodos}){
    return(
        <ul className="list">
    {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
            <TodoItem {...todo} key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodos={deleteTodos}
            />
        )
        
      })}
       
    </ul>
    )
    
}

TodoList.propTypes = {
    todos: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodos: PropTypes.func.isRequired
  };
  