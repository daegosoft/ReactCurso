// import react from "react";
import { createPortal} from "react-dom";
import './modal.css';
function Modal ({ children }) {
    return createPortal(
        <div className="Modal">
            {/* <div className="dialogo"> */}
                {/* <div className="globo"> */}
                    {children}
                {/* </div> */}
            {/* </div> */}
        </div>
        ,
        document.getElementById('modal')
    );
}

export { Modal }