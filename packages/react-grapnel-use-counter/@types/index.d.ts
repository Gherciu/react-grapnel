export type TUseCounter = (
  initialValue?: number,
) => {
  count: number
  increment: () => void
  decrement: () => void
}

declare const useCounter: TUseCounter

export default useCounter
