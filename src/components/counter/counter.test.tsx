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

    test("render a count of 10 after clicking the set button", async ()=> {
        render(<Counter />);

        const amountInput = screen.getByRole("spinbutton")
        await user.type(amountInput, "10");

        expect(amountInput).toHaveValue(10)

        const setBtn = screen.getByRole("button", {
            name: "Set"
        })
        await user.click(setBtn);

        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent("10");
    })

 })