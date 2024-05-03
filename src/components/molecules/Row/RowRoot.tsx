import { ReactNode } from "react"
import RowStyle from "./RowStyle"
import { RowProps } from "../../../interfaces"

interface Interface {
  children: ReactNode,
  rowStyle?: RowProps
}

const RowRoot = ({ children, rowStyle }: Interface) => {
  return (
    <RowStyle {...rowStyle}>
      {children}
    </RowStyle>
  )
}

export default RowRoot