function CartItem({ item, quantity }) {
	return (
		<a
			href="#"
			className="list-group-item list-group-item-action"
			aria-current="true"
		>
			<div>
				<h5 className="mb-1">{item.name}</h5>
				<small>${item.price}</small>
			</div>
		</a>
	);
}

export default CartItem;
