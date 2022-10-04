import { useState } from "react";
import Navbar from "./navbar";
import Menu from "./menu";
import data from "../menu.json";

function App() {
	const [cart, setCart] = useState([]);

	return (
		<>
			<Navbar cart={cart} />
			<Menu items={data} cart={cart} setCart={setCart} />
		</>
	);
}

export default App;
