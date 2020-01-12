import { TIsSSR } from '../@types'

const isSSR: TIsSSR = () => !!global

export default isSSR
