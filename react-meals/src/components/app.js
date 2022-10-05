import Navbar from "../ui/navbar";
import Menu from "./menu";
import CartModal from "./cart-modal";
import { useReducer, useState, useEffect } from "react";
import initialState from "../reducers/initialState";
import reducer from "../reducers/reducer";
import StateContext from "../contexts/state";
import MenuContext from "../contexts/menu";
import useHttp from "../hooks/useHttp";

function App() {
	const [meals, setMeals] = useState([]);
	const [state, dispatch] = useReducer(reducer, initialState);
	const { request } = useHttp();

	useEffect(() => {
		async function fetchMeals() {
			const data = await request({ url: "http://localhost:8080/meals" });
			setMeals(data || []);
		}

		fetchMeals();
	}, [request]);

	return (
		<MenuContext.Provider value={meals}>
			<StateContext.Provider value={{ state, dispatch }}>
				<Navbar />
				<Menu />
				<CartModal />
			</StateContext.Provider>
		</MenuContext.Provider>
	);
}

export default App;
