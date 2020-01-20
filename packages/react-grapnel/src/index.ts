import useCounter from 'react-grapnel-use-counter'
import useWindowSize from 'react-grapnel-use-window-size'
import useElementSize from 'react-grapnel-use-element-size'
import { ReactGrapnel } from '../@types'

const reactGrapnel: ReactGrapnel = {
  useCounter,
  useWindowSize,
  useElementSize,
}

export { useCounter, useWindowSize, useElementSize }
export default reactGrapnel
