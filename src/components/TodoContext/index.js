import react from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = react.createContext();

function TodoProvider ({children}){

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = react.useState('');
  const [openModal, setOpenModal] = react.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const filterTodos = todos.filter((todo) => todo.text.toLocaleLowerCase().includes(searchValue));
  
  const completeTodo =  (text) =>{
    const newTodos = [...todos];
    const id = newTodos.findIndex(todo => todo.text === text);
    newTodos[id].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const allTodos = [...todos];
    const id = allTodos.findIndex(todo => todo.text === text);
    allTodos.splice(id, 1);
    saveTodos(allTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];  
    newTodos.push({text, completed: false});
    saveTodos(newTodos);
  };
  
  return (
      <TodoContext.Provider value={{
          loading, error, completedTodos, totalTodos, searchValue, setSearchValue, filterTodos, completeTodo, deleteTodo, openModal, setOpenModal, addTodo
      }}>
          {children}
      </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider }