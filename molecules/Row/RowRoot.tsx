import { ReactNode } from "react"
import RowStyle, { RowProps } from "./RowStyle"

export interface RowRootInterface {
  children: ReactNode
  onClick?: () => void
  rowStyle?: RowProps
}

const RowRoot = ({ children, rowStyle, onClick }: RowRootInterface) => {
  return (
    <RowStyle {...rowStyle} onClick={onClick} cursor={onClick ? "pointer" : "inherit"}>
      {children}
    </RowStyle>
  )
}

export default RowRoot