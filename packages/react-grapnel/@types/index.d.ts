import { TUseCounter } from 'react-grapnel-use-counter'
import { TUseWindowSize } from 'react-grapnel-use-window-size'

export interface ReactGrapnel {
  useCounter: TUseCounter
  useWindowSize: TUseWindowSize
}

export const useWindowSize: TUseWindowSize
export const useCounter: TUseCounter
declare const reactGrapnel: ReactGrapnel

export default reactGrapnel
