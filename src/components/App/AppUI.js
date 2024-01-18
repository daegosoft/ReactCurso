import react from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCount } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { InsertTodo } from '../InsertTodo'
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';

function AppUI () {

  const 
    {loading, error, filterTodos, completeTodo, deleteTodo, openModal, setOpenModal} = react.useContext(TodoContext);
    return (
        <>
          {/* <header> */}
          <TodoCount />
          {/* </header> */}
          <TodoSearch />
          <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!loading && filterTodos.length === 0) && <EmptyTodos />}
            {filterTodos.map( todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}/>
              ))}
          </TodoList>
          {openModal}

          <CreateTodoButton todos={filterTodos} onClick = { () => setOpenModal(!openModal)} />
          {openModal && (
            <Modal>
              <InsertTodo />
            </Modal>
          )}
        </>
      );
}

export { AppUI }