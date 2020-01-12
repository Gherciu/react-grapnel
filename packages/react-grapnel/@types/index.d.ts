import { TUseCounter } from 'react-grapnel-use-counter'

export interface ReactGrapnel {
  useCounter: TUseCounter
}

export const useCounter: TUseCounter
declare const reactGrapnel: ReactGrapnel

export default reactGrapnel
