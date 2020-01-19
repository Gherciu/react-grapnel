/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/ban-ts-ignore, import/no-unresolved */
import React from 'react'
import { act } from 'react-dom/test-utils'
import { renderToString } from 'react-dom/server'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { renderHook } from '@testing-library/react-hooks'
import useWindowSize from '../index'

describe('useCounter', () => {
  it('should return initial window width and height', () => {
    const { result } = renderHook(() => useWindowSize())

    expect(result.current.width).toBe(window.innerWidth)
    expect(result.current.height).toBe(window.innerHeight)
  })

  it('should return changed window width and height on resize window', () => {
    const Component: React.FC = () => {
      const { width, height } = useWindowSize()
      return (
        <div data-testid='test'>
          <span>{`width: ${width || 'undefined'}`}</span>
          <span>{`height: ${height || 'undefined'}`}</span>
        </div>
      )
    }

    const { getByTestId, rerender } = render(<Component />)
    // initial rendering
    expect(getByTestId('test').innerHTML).toMatch(`width: ${window.innerWidth}`)
    expect(getByTestId('test').innerHTML).toMatch(
      `height: ${window.innerHeight}`,
    )
    // resize the window
    act(() => {
      // @ts-ignore
      window.innerWidth = 21
      // @ts-ignore
      window.innerHeight = 21
      window.dispatchEvent(new Event('resize'))
    })
    // after window resizing
    rerender(<Component />)
    expect(getByTestId('test').innerHTML).toMatch(`width: ${window.innerWidth}`)
    expect(getByTestId('test').innerHTML).toMatch(
      `height: ${window.innerHeight}`,
    )
  })

  // This test should executed always last because this test delete global window object
  it('should return initial window width and height as undefined if is server side rendering', () => {
    // @ts-ignore
    delete global.window
    const Component: React.FC = () => {
      const { width, height } = useWindowSize()
      return (
        <div data-testid='test'>
          <span>{`width: ${width || 'undefined'}`}</span>
          <span>{`height: ${height || 'undefined'}`}</span>
        </div>
      )
    }

    const ssrRenderedComponent = renderToString(<Component />)

    expect(ssrRenderedComponent).toMatch(`width: undefined`)
    expect(ssrRenderedComponent).toMatch(`height: undefined`)
  })
})
