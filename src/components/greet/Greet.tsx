import { Props } from "./greet.types"

const Greet = (props: Props) => {
  return (
    <div> hello {props.name ? props.name : "mohamed"} </div>
  )
}

export default Greet