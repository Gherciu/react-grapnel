import { useState, useEffect, useCallback } from 'react'
import { isSSR } from 'react-grapnel-utils'
import { TUseWindowSize, WindowSize } from '../@types'

const useWindowSize: TUseWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: !isSSR() ? window.innerWidth : undefined,
    height: !isSSR() ? window.innerHeight : undefined,
  })

  const handleWindowResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    if (!isSSR()) {
      window.addEventListener('resize', handleWindowResize)
    }
    return (): void => {
      if (!isSSR()) {
        window.removeEventListener('resize', handleWindowResize)
      }
    }
  }, [])

  return windowSize
}

export default useWindowSize
