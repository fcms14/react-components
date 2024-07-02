import { ReactNode } from "react"
import { RowHeaderStyle, RowProps } from "./RowStyle"

export interface RowRootInterface {
  children: ReactNode
  onClick?: () => void
  rowStyle?: RowProps
  observer?: ((instance: HTMLDivElement | null) => void)
}

const RowHeaderRoot = ({ children, rowStyle, onClick, observer }: RowRootInterface) => {
  return (
    <RowHeaderStyle {...rowStyle} onClick={onClick} cursor={onClick ? "pointer" : "inherit"} ref={observer}>
      {children}
    </RowHeaderStyle>
  )
}

export default RowHeaderRoot