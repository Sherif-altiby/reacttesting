 import { useEffect, useState } from "react"
import { skillsProps } from "./skills.types"

const Skills = (props: skillsProps) => {
    const { allSkills } = props
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)


    useEffect(() => {
      setTimeout(() => { setIsLoggedIn(true) }, 2000)
    }, [])

  return (
    <>
      <ul> 
         {
            allSkills.map((item) => (
             <li> {item} </li>
            ))
         }
      </ul>  
      {
        isLoggedIn? (
            <button> Start Learning </button>
        ) : ( 
            <button onClick={() => setIsLoggedIn(true)} > Login </button>
         )
      }
    </>
  )
}

export default Skills