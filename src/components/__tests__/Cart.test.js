import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import { act } from "react";
import MOCK_DATA from "./mocks/restaurantMenuMockData.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});


test('should load restaurant menu component', async () => {
  await act( async () => render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu/>
            <Cart />
        </Provider>
    </BrowserRouter>
    ))

    //fetch accordian and click on Desserts dished
    const accordian = screen.getByText("Desserts (2)");
    fireEvent.click(accordian);

    // expect the lenght of the list to be 2
    expect(screen.getAllByTestId("menuItems").length).toBe(2);

    //expect the header's cart link to be default
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

    //fetch add btn and click first add btn
    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);

    //expect the header's cart link to be updated
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    // expect the lenght of the list to be 3
    expect(screen.getAllByTestId("menuItems").length).toBe(3);

    fireEvent.click(screen.getByText("Clear Cart"));

    // expect the lenght of the list to be 2
    expect(screen.getAllByTestId("menuItems").length).toBe(2);

    //expect the header's cart link to be updated
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
})
