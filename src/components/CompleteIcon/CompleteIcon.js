// import react from "react";
import { TodoIcon } from "./TodoIcon/TodoIcon";
function CompleteIcon({completed, onComplete}) {
    return (
        <TodoIcon 
        type="complete"
        color={completed ? "green" : "gray"}
        onClick={onComplete}
        />
    );
}

export { CompleteIcon }