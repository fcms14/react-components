import { ReactNode } from "react"
import HeaderStyle from "./HeaderStyle"
import { HeaderProps } from "../../atoms/Header"

export interface HeaderRootInterface {
  children: ReactNode,
  headerStyle?: HeaderProps
}

const HeaderRoot = ({ children, headerStyle }: HeaderRootInterface) => {
  return (
    <HeaderStyle {...headerStyle}>
      {children}
    </HeaderStyle >
  )
}

export default HeaderRoot