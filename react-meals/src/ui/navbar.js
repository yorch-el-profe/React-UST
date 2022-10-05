import styles from "../styles/navbar.module.css";

function Navbar({ cart, onModalOpen }) {
	const total = cart.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<nav className={styles.navbar}>
			<h2>React Meals</h2>
			<figure onClick={onModalOpen}>
				<span>Carrito</span>
				<small>{total}</small>
			</figure>
		</nav>
	);
}

export default Navbar;
