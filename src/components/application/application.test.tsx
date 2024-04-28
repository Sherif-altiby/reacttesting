import Application from "./Application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
    test("Render Correctly", () => {
         render(<Application />);

         const pageHeading = screen.getByRole("heading", {
            level: 1
         });
         expect(pageHeading).toBeInTheDocument();

         const sectionHeading = screen.getByRole("heading", {
            level: 2
         });
         expect(sectionHeading).toBeInTheDocument();

         const nameElement = screen.getByRole("textbox", {
            name: "Name"
         });
         expect(nameElement).toBeInTheDocument();

         const nameElement2 = screen.getByLabelText("Name");
         expect(nameElement2).toBeInTheDocument();

         const formExist = screen.getByRole("combobox");
         expect(formExist).toBeInTheDocument();

         const checkbox = screen.getByRole("checkbox");
         expect(checkbox).toBeInTheDocument();

         const termsExist = screen.getByLabelText("I agree to the terms and conditions.");
         expect(termsExist).toBeInTheDocument();

         const getInputByPlaceholder = screen.getByPlaceholderText("full name");
         expect(getInputByPlaceholder).toBeInTheDocument();

         const getText = screen.getByText("All Field Are Mandatory");
         expect(getText).toBeInTheDocument();

         const getDisplayValue = screen.getByDisplayValue("Sherif altiby");
         expect(getDisplayValue).toBeInTheDocument();

         // const imgElement = screen.getAllByAltText("img")
         // expect(imgElement).toBeInTheDocument();

         const elementTitle = screen.getByTitle("close");
         expect(elementTitle).toBeInTheDocument()

         const elementTestID = screen.getByTestId("custome-element");
         expect(elementTestID).toBeInTheDocument();

    })
})