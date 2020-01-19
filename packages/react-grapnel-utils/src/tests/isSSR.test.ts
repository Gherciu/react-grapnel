/* eslint-disable @typescript-eslint/ban-ts-ignore */
import isSSR from '../isSSR'

describe('isSSR', () => {
  it('should return true or false if is server side rendering', () => {
    // @ts-ignore
    delete global.window // make window null because jest ptovide his own mock window object
    expect(isSSR()).toBeTruthy()
  })
})
