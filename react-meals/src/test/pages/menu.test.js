import { render, screen } from "@testing-library/react";
import Menu from "../../pages/menu";
import StateContext from "../../contexts/state";

// Mock de toda la biblioteca "react-router-dom"
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

describe("Menu", () => {
	beforeEach(() => {
		// jest.fn() crea un mock
		window.fetch = jest.fn();
	});

	it("should render", () => {
		window.fetch.mockResolvedValueOnce({
			json: async () => [],
			ok: true,
		});

		const fakeDispatch = jest.fn();
		const fakeState = {};

		const { container } = render(
			<StateContext.Provider
				value={{ dispatch: fakeDispatch, state: fakeState }}
			>
				<Menu />
			</StateContext.Provider>
		);
		const menuContainer = container.querySelector("#menu-container");

		expect(menuContainer).toBeInTheDocument();
	});

	it("should display meals", async () => {
		window.fetch.mockResolvedValueOnce({
			json: async () => [
				{
					id: 100,
					name: "Enchiladas",
					price: 100,
					description: "Platillo mexicano",
				},
			],
			ok: true,
		});

		const fakeDispatch = jest.fn();
		const fakeState = {};

		render(
			<StateContext.Provider
				value={{ dispatch: fakeDispatch, state: fakeState }}
			>
				<Menu />
			</StateContext.Provider>
		);

		const name = await screen.findByText("Enchiladas");
		const description = await screen.findByText("Platillo mexicano");

		expect(name).toBeInTheDocument();
		expect(description).toBeInTheDocument();
	});
});
