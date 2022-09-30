function List({ title, entries }) {
	return (
		<div className="d-flex align-items-center flex-column mt-4">
			<h1>{title}</h1>
			<ul className="list-group">
				{entries.map((entry) => (
					<li className="list-group-item">{entry}</li>
				))}
			</ul>
		</div>
	);
}

export default List;
