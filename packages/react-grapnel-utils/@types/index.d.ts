export type TIsSSR = () => boolean

export interface ReactGrapnelUtils {
  isSSR: TIsSSR
}

export const isSSR: TIsSSR
declare const reactGrapnelUtils: ReactGrapnelUtils

export default reactGrapnelUtils
