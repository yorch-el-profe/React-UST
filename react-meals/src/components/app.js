import { useRef, useState } from "react";

function App() {
	const menu = [
		{
			name: "Sushi",
			price: 199,
			description: "Preparado con nuestro mejor salmón",
		},
		{
			name: "Schnitzel",
			price: 99,
			description: "Una especialidad Alemana",
		},
		{
			name: "Enchiladas",
			price: 129,
			description: "Platillo típico mexicano",
		},
	];

	const [cart, setCart] = useState(0);
	const inputs = useRef([]);

	function addHandler(index) {
		const item = menu[index];
		const ref = inputs.current[index];

		setCart(cart + parseInt(ref.value));

		ref.value = "";
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						React Meals
					</a>
					Carrito <span className="badge bg-danger">{cart}</span>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#"></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="list-group">
				{menu.map((item, index) => (
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
									<input
										type="number"
										className="form-control"
										ref={(element) => (inputs.current[index] = element)}
									/>
								</span>
								<button
									type="button"
									className="btn btn-danger"
									onClick={() => addHandler(index)}
								>
									Agregar
								</button>
							</div>
						</div>
						<p className="mb-1">{item.description}</p>
						<small>${item.price}</small>
					</a>
				))}
			</div>
		</>
	);
}

export default App;
