import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../CompleteIcon/DeleteIcon';
import './TodoItem.css';
function TodoItem(props) {
    return (
      <li>
        {/* <span className={`icon ${props.completed && "completed"}`} onClick={props.onComplete}>V</span> */}
        <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
        <p className={`${props.completed && "text-completed"}`}>{props.text}</p>
        {/* <span className='icon-del deleted' onClick={props.onDelete}>X</span> */}
        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }

export { TodoItem }