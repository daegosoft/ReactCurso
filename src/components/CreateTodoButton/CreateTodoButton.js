import './CreateButton.css';
function CreateTodoButton({onClick}) {
    return (
          // <div className={`${verTexto && "no-visible"}`}>
          //   <h1>Nuevo Todo</h1>
          //   <input value={} />
          // </div>
        <button className="btn" onClick={onClick}>+</button>
    );
  }

export { CreateTodoButton }