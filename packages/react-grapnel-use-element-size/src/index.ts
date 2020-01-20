/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { useState, useEffect, useCallback, useRef } from 'react'
import { isSSR } from 'react-grapnel-utils'
import { TUseElementSize, ElementSizeState } from '../@types'

const useElementSize: TUseElementSize = () => {
  const elementRef = useRef(null)

  const [{ width, height }, setElementSize] = useState<ElementSizeState>({
    width: undefined,
    height: undefined,
  })

  const handleElementResize = useCallback(() => {
    // @ts-ignore
    const {
      width: elementWidth,
      height: elementHeight,
      // @ts-ignore
    } = elementRef.current.getBoundingClientRect()
    // @ts-ignore

    setElementSize({
      width: elementWidth,
      height: elementHeight,
    })
  }, [elementRef])

  useEffect(() => {
    /* istanbul ignore next */
    if (!isSSR()) {
      handleElementResize() // trigger an artificial initial resize to set initial values
      // @ts-ignore
      window.addEventListener('resize', handleElementResize)
    }
    return (): void => {
      /* istanbul ignore next */
      if (!isSSR()) {
        // @ts-ignore
        window.removeEventListener('resize', handleElementResize)
      }
    }
  }, [])

  return {
    elementRef,
    width,
    height,
  }
}

export default useElementSize
