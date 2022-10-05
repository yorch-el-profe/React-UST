import styles from "../styles/menu.module.css";
import Button from "../ui/button";

function Menu({ items, cart, setCart }) {
	return (
		<div className={styles["menu-container"]}>
			<section className={styles.menu}>
				{items.map((item) => (
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
									<input type="number" />
								</div>
								<Button>+ Agregar</Button>
							</div>
						</div>
					</article>
				))}
			</section>
		</div>
	);
}

export default Menu;
