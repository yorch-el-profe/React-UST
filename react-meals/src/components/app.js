import Navbar from "../ui/navbar";
import Menu from "./menu";
import CartModal from "./cart-modal";
import data from "../menu.json";
import { useReducer } from "react";
import initialState from "../reducers/initialState";
import reducer from "../reducers/reducer";
import StateContext from "../contexts/state";
import MenuContext from "../contexts/menu";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<MenuContext.Provider value={data}>
			<StateContext.Provider value={{ state, dispatch }}>
				<Navbar />
				<Menu />
				<CartModal />
			</StateContext.Provider>
		</MenuContext.Provider>
	);
}

export default App;
