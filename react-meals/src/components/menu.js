import MenuItem from "./menu-item";

function Menu({ items, cart, setCart }) {
	return (
		<div className="list-group">
			{items.map((item) => (
				<MenuItem item={item} cart={cart} setCart={setCart} />
			))}
		</div>
	);
}

export default Menu;
