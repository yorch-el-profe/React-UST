import { useState } from "react";
import Navbar from "../ui/navbar";
import Menu from "./menu";
import CartModal from "./cart-modal";
import data from "../menu.json";

function App() {
	const [cart, setCart] = useState([]);

	const [isOpen, setIsOpen] = useState(false);

	function onModalClose() {
		setIsOpen(false);
	}

	function onModalOpen() {
		setIsOpen(true);
	}

	return (
		<>
			<Navbar cart={cart} onModalOpen={onModalOpen} />
			<Menu items={data} cart={cart} setCart={setCart} />
			<CartModal cart={cart} isOpen={isOpen} onClose={onModalClose} />
		</>
	);
}

export default App;
