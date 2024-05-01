import { ReactNode } from "react"
import HeaderStyle from "./style"

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