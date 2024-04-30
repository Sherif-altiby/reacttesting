import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users", () => {

    test("render correctly", () => {
        render(<Users />)
        
        const textElement = screen.getByText("users");
        expect(textElement).toBeInTheDocument();
    })

    test("render a list of users", async () => {
        render(<Users />)

        const users =await screen.findAllByRole("listitem");
        expect(users).toHaveLength(10) 
    })
})