import CartItem from "./cart-item";

function CartDetail({ cart }) {
	return (
		<div className="list-group">
			{cart.map(({ item, quantity }) => (
				<CartItem item={item} quantity={quantity} />
			))}
		</div>
	);
}

export default CartDetail;
