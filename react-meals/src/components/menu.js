import MenuItem from "./menu-item";

function Menu({ items, cart }) {
	return (
		<div className="list-group">
			{items.map((item) => (
				<MenuItem item={item} cart={cart} />
			))}
		</div>
	);
}

export default Menu;
