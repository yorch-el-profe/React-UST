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

	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						React Meals
					</a>
					Carrito <span class="badge bg-danger">2</span>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#"></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div class="list-group">
				{menu.map((x) => (
					<a
						href="#"
						class="list-group-item list-group-item-action"
						aria-current="true"
					>
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">Sushi</h5>
							<div className="d-flex flex-column">
								<span>
									Cantidad
									<input type="number" />
								</span>
								<button className="btn btn-danger">Agregar</button>
							</div>
						</div>
						<p class="mb-1">Preparado con nuestro mejor salmón.</p>
						<small>$199.00</small>
					</a>
				))}
			</div>
		</>
	);
}

export default App;
