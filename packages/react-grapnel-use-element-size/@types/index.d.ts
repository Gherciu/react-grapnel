export type TUseWindowSize = () => WindowSize

export interface WindowSize {
  width?: number
  height?: number
}

declare const useWindowSize: TUseWindowSize

export default useWindowSize
