function CartDetail({ cart, setCart }) {
	function increment(cartItem) {
		cartItem.quantity++;
		setCart([...cart]);
	}

	function decrement(cartItem) {
		cartItem.quantity--;
		setCart([...cart]);
	}

	return (
		<div className="list-group">
			{cart.map((cartItem) => (
				<a
					href="#"
					className="list-group-item list-group-item-action"
					aria-current="true"
				>
					<div className="d-flex justify-content-between">
						<div>
							<h5 className="mb-1">{cartItem.item.name}</h5>
							<small>${cartItem.item.price}</small>
							{cartItem.quantity}
						</div>
						<div>
							<button
								className="btn btn-sm btn-outline-danger"
								onClick={() => decrement(cartItem)}
							>
								-
							</button>
							<button
								className="btn btn-sm btn-outline-danger"
								onClick={() => increment(cartItem)}
							>
								+
							</button>
						</div>
					</div>
					<hr />
				</a>
			))}
		</div>
	);
}

export default CartDetail;
