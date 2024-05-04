import { ReactNode } from "react"
import ToasterStyle from "./ToasterStyle"
import { ToasterProps } from "../../../interfaces"

interface Interface {
  children: ReactNode,
  toasterStyle: ToasterProps
}


const ToasterRoot = ({ children, toasterStyle }: Interface) => {
  return (
    <ToasterStyle {...toasterStyle}>
      {children}
    </ToasterStyle>
  )
}

export default ToasterRoot 