import { ReactNode } from "react"
import RowStyle, { RowProps } from "./RowStyle"

export interface RowRootInterface {
  children: ReactNode
  onClick?: () => void
  rowStyle?: RowProps
  observer?: ((instance: HTMLDivElement | null) => void)
}

const RowRoot = ({ children, rowStyle, onClick, observer }: RowRootInterface) => {
  return (
    <RowStyle {...rowStyle} onClick={onClick} cursor={onClick ? "pointer" : "inherit"} ref={observer}>
      {children}
    </RowStyle>
  )
}

export default RowRoot