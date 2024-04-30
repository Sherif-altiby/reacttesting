import { CounterTwoProps } from "./CounterTwo.types"

const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h1> Counter Two </h1>
      <p> {props.count} </p>

      { props.hndleIncrement && ( <button onClick={props.hndleIncrement} > Increment </button> ) }
      { props.hndleDecrement && ( <button onClick={props.hndleDecrement} > Decrement </button> ) }

    </div>
  )
}

export default CounterTwo