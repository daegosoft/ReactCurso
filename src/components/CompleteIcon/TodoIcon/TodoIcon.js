import { VscCheck } from "react-icons/vsc";
import { VscFold } from "react-icons/vsc";
import './TodoIcon.css';
const iconTypes = {
    "complete": (color) => <VscCheck className="icon-svg" fill={color}/>,
    "delete": (color) => <VscFold className="icon-svg" fill={color}/>
}
function TodoIcon({type, color, onClick}) {
    return (
        <span className={`icon-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon } 