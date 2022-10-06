import Backdrop from "../portals/backdrop";
import Modal from "../portals/modal";
import Button from "../ui/button";
import styles from "../styles/cart-modal.module.css";
import StateContext from "../contexts/state";
import { useContext } from "react";
import actions from "../reducers/actions";
import { Link } from "react-router-dom";

function CartModal() {
	const { state, dispatch } = useContext(StateContext);

	function closeModal() {
		dispatch({
			type: actions.CLOSE_MODAL,
		});
	}

	function increment(id) {
		dispatch({
			type: actions.UPDATE_MEAL,
			payload: { id, quantity: 1 },
		});
	}

	function decrement(id) {
		dispatch({
			type: actions.UPDATE_MEAL,
			payload: { id, quantity: -1 },
		});
	}

	return state.isOpen ? (
		<>
			<Backdrop />
			<Modal>
				<ul className={styles["cart-modal"]}>
					{state.cart.map((cartItem) => (
						<li>
							<section className={styles["cart-item"]}>
								<article>
									<h2>{cartItem.meal.name}</h2>
									<div>
										<h4>$ {cartItem.meal.price}</h4>
										<figure>
											<h4>x {cartItem.quantity}</h4>
										</figure>
									</div>
								</article>
								<article>
									<Button
										outline
										square
										onClick={() => decrement(cartItem.meal.id)}
									>
										-
									</Button>
									<Button
										outline
										square
										onClick={() => increment(cartItem.meal.id)}
									>
										+
									</Button>
								</article>
							</section>
						</li>
					))}
					<li>
						<Button outline onClick={closeModal}>
							Cerrar
						</Button>
						<Link to="/checkout" onClick={closeModal}>
							<Button>Ordenar</Button>
						</Link>
					</li>
				</ul>
			</Modal>
		</>
	) : null;
}

export default CartModal;
