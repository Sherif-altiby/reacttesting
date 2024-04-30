import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import user from "@testing-library/user-event";

describe("Counter Two", () => {

    test("render Correctly", () => {
        render(<CounterTwo count={0} />)

        const textElement = screen.getByText("Counter Two");
        expect(textElement).toBeInTheDocument()
    })

    test("handlers are called", async () => {
        const incrementHandler = jest.fn();
        const edcrementHandler = jest.fn();
        
        render(<CounterTwo count={0} hndleIncrement={incrementHandler} hndleDecrement={edcrementHandler} />)

        const incrementBtn = screen.getByRole("button", {name: "Increment"});
        const decrementBtn = screen.getByRole("button", {name: "Decrement"});

        await user.click(incrementBtn)
        await user.click(decrementBtn)

        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(edcrementHandler).toHaveBeenCalledTimes(1)
    })
})