import styles from "../styles/navbar.module.css";
import StateContext from "../contexts/state";
import { useContext } from "react";
import actions from "../reducers/actions";

function Navbar() {
	const { state, dispatch } = useContext(StateContext);
	const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);

	function openModal() {
		dispatch({
			type: actions.OPEN_MODAL,
		});
	}

	return (
		<nav className={styles.navbar}>
			<h2>React Meals</h2>
			<figure onClick={openModal}>
				<span>Carrito</span>
				<small>{total}</small>
			</figure>
		</nav>
	);
}

export default Navbar;
