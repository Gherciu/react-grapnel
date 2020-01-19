import { TIsSSR } from '../@types'

const isSSR: TIsSSR = () => typeof window === 'undefined'

export default isSSR
