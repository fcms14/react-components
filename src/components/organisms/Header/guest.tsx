import { ReactNode } from "react"
import Header from "../../atoms/Header"

interface Interface {
  children: ReactNode,
}

const HeaderGuest = ({ children }: Interface) => {
  return (
    <Header>
      {children}
    </Header>
  )
}

export default HeaderGuest