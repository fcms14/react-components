import { ReactNode } from "react"
import RowStyle from "./RowStyle"
import { RowProps } from "../../../interfaces"

interface Interface {
  children: ReactNode
  onClick?: () => void
  rowStyle?: RowProps
}

const RowRoot = ({ children, rowStyle, onClick }: Interface) => {
  return (
    <RowStyle {...rowStyle} onClick={onClick} cursor={onClick ? "pointer" : "inherit"}>
      {children}
    </RowStyle>
  )
}

export default RowRoot