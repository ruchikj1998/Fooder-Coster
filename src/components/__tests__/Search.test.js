import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom";
import MOCK_DATA from "./mocks/resListApiDataMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

test('should search res cards for pizza input', async () => {

    await act(async () => render(
       <BrowserRouter>
        <Body />
        </BrowserRouter>
    ))
    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value : "pizza"} });

    fireEvent.click(searchBtn);

    const resCards = screen.getAllByTestId("res-card");

    expect(resCards.length).toBe(3);
})


test('should filter top reated restaurants', async () => {

    await act(async () => render(
       <BrowserRouter>
        <Body />
        </BrowserRouter>
    ))
    const topRatedBtn = screen.getByTestId("topRatedBtn");

    fireEvent.click(topRatedBtn);

    const resCards = screen.getAllByTestId("res-card");

    expect(resCards.length).toBe(7);
})
