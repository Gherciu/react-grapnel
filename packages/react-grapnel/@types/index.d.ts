import { TUseCounter } from 'react-grapnel-use-counter'
import { TUseWindowSize } from 'react-grapnel-use-window-size'
import { TUseElementSize } from 'react-grapnel-use-element-size'

export interface ReactGrapnel {
  useCounter: TUseCounter
  useWindowSize: TUseWindowSize
  useElementSize: TUseElementSize
}

export const useElementSize: TUseElementSize
export const useWindowSize: TUseWindowSize
export const useCounter: TUseCounter
declare const reactGrapnel: ReactGrapnel

export default reactGrapnel
