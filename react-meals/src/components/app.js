import { useState } from "react";
import Navbar from "./navbar";
import Menu from "./menu";
import data from "../menu.json";

function App() {
	const [cart, setCart] = useState([
		{
			item: "sushi",
			quantity: 10,
		},
		{
			item: "enchiladas",
			quantity: 20,
		},
	]);

	return (
		<>
			<Navbar cart={cart} />
			<Menu items={data} cart={cart} />
		</>
	);
}

export default App;
