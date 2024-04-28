import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
    test("Test greet text", () => {
        render(<Greet />)
        const elementText = screen.getByText(/hello/);
        expect(elementText).toBeInTheDocument();
     })
    
})

describe("Nested", () => {
    test("Test hello sherif text", () => {
        render(<Greet name = "sherif" />);
        const elementText = screen.getByText("hello sherif");
        expect(elementText).toBeInTheDocument();
     })
})
 