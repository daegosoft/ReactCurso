import react from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
function TodoCount() {
  const {completedTodos, totalTodos} = react.useContext(TodoContext);
    return (
      <h1>Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h1>
    );
  }

export { TodoCount };