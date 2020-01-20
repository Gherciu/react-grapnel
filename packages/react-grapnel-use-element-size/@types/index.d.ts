import { RefObject } from 'react'

export type TUseElementSize = () => UseElementSize

export interface ElementSizeState {
  width?: number
  height?: number
}

export interface UseElementSize extends ElementSizeState {
  elementRef:
    | string
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined
}

declare const useElementSize: TUseElementSize

export default useElementSize
