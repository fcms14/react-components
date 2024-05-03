import { ReactNode } from "react"
import HeaderStyle from "./HeaderStyle"
import { HeaderProps } from "../../../interfaces"

interface Interface {
  children: ReactNode,
  headerStyle?: HeaderProps
}

const HeaderRoot = ({ children, headerStyle }: Interface) => {
  return (
    <HeaderStyle {...headerStyle}>
      {children}
    </HeaderStyle >
  )
}

export default HeaderRoot