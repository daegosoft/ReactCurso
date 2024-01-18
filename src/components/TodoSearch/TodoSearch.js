import react from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
function TodoSearch() {
  const { searchValue, setSearchValue } = react.useContext(TodoContext);

  return (
    <div className='Todo'>
      <input placeholder='Buscar...'
      value={searchValue}
      onChange={ (event) => setSearchValue(event.target.value) }/>
    </div>
  );
}

export { TodoSearch };