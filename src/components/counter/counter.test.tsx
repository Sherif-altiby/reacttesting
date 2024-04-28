import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe('Counter', () => { 
    
    test("render correctly", () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument()

        const incrementBtn = screen.getByRole("button", {
            name: "Increment"
        })
        expect(incrementBtn).toBeInTheDocument()
    })

    test("render a count of 0", () => {
        render(<Counter />);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("0");
    })

    test("render a count of 1 after clicking", async () => {
        render(<Counter />);
        const incrementBtn = screen.getByRole("button", {
            name: "Increment"
        })

        await user.click(incrementBtn);

        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("1");
    })

 })