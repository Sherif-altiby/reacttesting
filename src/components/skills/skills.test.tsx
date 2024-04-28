import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
    const allSkills = ["html", "css", "javascript", "react"]

    test("render correctely", () => {
        render( <Skills allSkills={allSkills} /> )

        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();

     })

    test("render a list of skills", () => {
        render( <Skills allSkills={allSkills} /> )
        
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(allSkills.length);
    }) 

    test("render Login button", () => {
        render( <Skills allSkills={allSkills} /> )
        
        const loginBtn = screen.getByRole("button", {
            name: "Login"
        });
        expect(loginBtn).toBeInTheDocument()
    })

    test("Start Learning button not rendered", () => {
        render( <Skills allSkills={allSkills} /> )

        const startLearningBtn = screen.queryByRole("button", {
            name: "Start Learning"
        });
        expect(startLearningBtn).not.toBeInTheDocument()

    })

    test("start learning btn is eventualy displayed", async () => {
      const view = render( <Skills allSkills={allSkills} /> );
      logRoles(view.container)
        
        // screen.debug()
        const startLearningBtn = await screen.findByRole("button", {
            name: "Start Learning"
        },{
            timeout: 3000
        });
        // screen.debug()

        expect(startLearningBtn).toBeInTheDocument()
    })
})