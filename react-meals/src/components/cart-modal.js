import Backdrop from "../portals/backdrop";
import Modal from "../portals/modal";
import Button from "../ui/button";
import styles from "../styles/cart-modal.module.css";

function CartModal({ cart, isOpen, onClose }) {
	return isOpen ? (
		<>
			<Backdrop onClose={onClose} />
			<Modal>
				<ul className={styles["cart-modal"]}>
					{cart.map((cartItem) => (
						<li>
							<section className={styles["cart-item"]}>
								<article>
									<h2>{cartItem.item.name}</h2>
									<div>
										<h4>$ {cartItem.item.price}</h4>
										<figure>
											<h4>x {cartItem.quantity}</h4>
										</figure>
									</div>
								</article>
								<article>
									<Button outline square>
										-
									</Button>
									<Button outline square>
										+
									</Button>
								</article>
							</section>
						</li>
					))}
					<li>
						<Button outline onClick={onClose}>
							Cerrar
						</Button>
						<Button>Ordenar</Button>
					</li>
				</ul>
			</Modal>
		</>
	) : null;
}

export default CartModal;
