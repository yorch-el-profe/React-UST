import CartDetail from "./cart-detail";

function CartModal({ cart }) {
	return (
		<div
			class="modal fade"
			id="cartModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<CartDetail cart={cart} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartModal;
