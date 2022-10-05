import styles from "../styles/menu.module.css";
import Button from "../ui/button";
import MenuContext from "../contexts/menu";
import { useContext, useRef } from "react";
import StateContext from "../contexts/state";
import actions from "../reducers/actions";

function Menu() {
	const inputs = useRef([]);
	const meals = useContext(MenuContext);
	const { dispatch } = useContext(StateContext);

	function addMeal(index) {
		const meal = meals[index];
		const input = inputs.current[index];

		if (input.value) {
			dispatch({
				type: actions.ADD_MEAL,
				payload: { meal, quantity: parseInt(input.value) },
			});

			input.value = "";
		}
	}

	return (
		<div className={styles["menu-container"]}>
			<section className={styles.menu}>
				{meals.map((item, index) => (
					<article>
						<div className={styles["menu-item"]}>
							<div>
								<h1>{item.name}</h1>
								<p>{item.description}</p>
								<small>$ {item.price}</small>
							</div>
							<div>
								<div className={styles["input-container"]}>
									<span>Cantidad</span>
									<input
										type="number"
										ref={(el) => (inputs.current[index] = el)}
									/>
								</div>
								<Button onClick={() => addMeal(index)}>+ Agregar</Button>
							</div>
						</div>
					</article>
				))}
			</section>
		</div>
	);
}

export default Menu;
