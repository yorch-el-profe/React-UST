import Backdrop from "../ui/backdrop";
import ReactDOM from "react-dom";

const root = document.getElementById("backdrop");

function BackdropPortal({ onClose }) {
	return ReactDOM.createPortal(<Backdrop onClose={onClose} />, root);
}

export default BackdropPortal;
