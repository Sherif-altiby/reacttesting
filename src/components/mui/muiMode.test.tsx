import { render, screen } from "../../test-utiles";
import { MuiMode } from "./muiMode";


describe("muiMode", () => {
  
    test("render text correctly", () => {
        render(<MuiMode />)
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode")
    })
})