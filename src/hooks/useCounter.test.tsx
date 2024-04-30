import { renderHook , act} from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter hook", () => {

    test("render the initial count", () => {
        const { result } = renderHook(useCounter)

        expect(result.current.count).toBe(0)
    })

    test("the vaule in count is equal to value of initiale value", () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        })

        expect(result.current.count).toBe(10);
    })

    test("test increment", () => {
        const { result } = renderHook(useCounter)
        act(() => result.current.increment());

        expect(result.current.count).toBe(1)
    })

    test("test decrement", () => {
        const { result } = renderHook(useCounter)
        act(() => result.current.decrement());

        expect(result.current.count).toBe(-1)
    })
})