/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from '../index'

describe('useCounter', () => {
  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })

  it('should return corect initial count', () => {
    const { result } = renderHook(() => useCounter(21))

    expect(result.current.count).toBe(21)
  })

  it('should decrement counter', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(-1)
  })
})
