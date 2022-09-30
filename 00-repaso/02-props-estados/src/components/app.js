import List from "./list";

function App() {
	const series = [
		"Mr. Robot",
		"Smallville",
		"Breaking Bad",
		"Lost",
		"The X-Files",
		"Malcom In the Middle",
		"She Hulk",
	];
	return (
		<div className="container">
			<List title="Series" entries={series} />
		</div>
	);
}

export default App;
