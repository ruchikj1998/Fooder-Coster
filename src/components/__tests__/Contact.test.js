import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


test("Contact us rendered successfully", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});


test("Should load button inside component", () => {
    render(<Contact />);

    //Querying
    const button = screen.getAllByTestId("test-btn");

    //Assertion
    expect(button).toHaveLength(1);
});
