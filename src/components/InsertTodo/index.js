import react from 'react';
import { TodoContext } from '../TodoContext';
import './InsertTodo.css'
function InsertTodo () {
    const { addTodo, setOpenModal } = react.useContext(TodoContext);
    const [newTodo, setNewTodo] = react.useState('');
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodo);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodo(event.target.value);
    };
    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <label>Escribe tu nuevo TODO</label>
                <input placeholder='Nuevo Todo' value={newTodo} onChange={onChange}/>
                <button type="button" className="btn-close" onClick={onCancel}>Cerrar</button>
                <button type="submit" className="btn-add">Agregar</button>
            </form>
        </div>
    );
}

export { InsertTodo }