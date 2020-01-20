/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/ban-ts-ignore, import/no-unresolved */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import useElementSize from '../index'

describe('useElementSize', () => {
  it('should return changed element width and height on resize element', () => {
    const Component: React.FC = () => {
      const { elementRef, width, height } = useElementSize()

      return (
        <div ref={elementRef} data-testid='test'>
          <span>{`width: ${width}`}</span>
          <span>{`height: ${height}`}</span>
        </div>
      )
    }

    const { getByTestId } = render(<Component />)
    // initial rendering
    expect(getByTestId('test').innerHTML).toMatch(`width: 0`)
    expect(getByTestId('test').innerHTML).toMatch(`height: 0`)
  })

  it('should return initial element width and height as undefined if is server side rendering', () => {
    const Component: React.FC = () => {
      const { elementRef, width, height } = useElementSize()

      return (
        <div ref={elementRef} data-testid='test'>
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
