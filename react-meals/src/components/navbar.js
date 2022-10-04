import styles from "../styles/navbar.module.css";

function Navbar({ cart }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
			<div className="container-fluid px-5">
				<a className="navbar-brand" href="#">
					React Meals
				</a>
				<div
					className={styles.cart}
					data-bs-toggle="modal"
					data-bs-target="#cartModal"
				>
					<span className="text-white">Carrito</span>
					<span className="ms-3 badge bg-danger">
						{cart.reduce((acc, val) => acc + val.quantity, 0)}
					</span>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
