import styles from "../styles/backdrop.module.css";

function Backdrop({ onClose }) {
	return <div className={styles.backdrop} onClick={onClose} />;
}

export default Backdrop;
