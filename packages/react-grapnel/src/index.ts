import { toNumber } from 'react-grapnel-utils'
import { Multipack, TSum } from '../@types'

const sum: TSum = (a, b) => toNumber(a) + toNumber(b)

const multipack: Multipack = {
  sum,
}

export { sum }
export default multipack