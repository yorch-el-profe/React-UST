import { useRef } from "react";

function MenuItem({ item, cart }) {
	const input = useRef(null);

	function addHandler(event) {
		event.preventDefault();
		const quantity = parseInt(input.current.value);

		cart.push({ item, quantity });
	}

	return (
		<a
			href="#"
			className="list-group-item list-group-item-action"
			aria-current="true"
		>
			<div className="d-flex w-100 justify-content-between">
				<h5 className="mb-1">{item.name}</h5>
				<div className="d-flex flex-column">
					<span>
						Cantidad
						<input type="number" className="form-control" ref={input} />
					</span>
					<button type="button" className="btn btn-danger" onClick={addHandler}>
						Agregar
					</button>
				</div>
			</div>
			<p className="mb-1">{item.description}</p>
			<small>${item.price}</small>
		</a>
	);
}

export default MenuItem;
