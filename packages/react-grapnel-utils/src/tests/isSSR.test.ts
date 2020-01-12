import isSSR from '../isSSR'

describe('isSSR', () => {
  it('should return true or false if is server side rendering', () => {
    expect(isSSR()).toBeTruthy()
  })
})
