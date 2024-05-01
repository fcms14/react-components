import { ReactNode } from "react"
import HeaderStyle from "./HeaderStyle"

interface Interface {
  children: ReactNode,
  justifyContent?: string
}

const HeaderRoot = ({ children, justifyContent }: Interface) => {
  return (
    <HeaderStyle justifyContent={justifyContent}>
      {children}
    </HeaderStyle>
  )
}

export default HeaderRoot