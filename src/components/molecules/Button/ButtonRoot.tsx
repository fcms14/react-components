import { ReactNode } from "react"
import ButtonStyle from "./ButtonStyle"
import { ButtonProps } from "../../../interfaces"

interface Interface {
  onClick: () => void,
  children: ReactNode,
  buttonStyle?: ButtonProps
}

const ButtonRoot = ({ children, buttonStyle, onClick }: Interface) => {
  return (
    <ButtonStyle {...buttonStyle} onClick={onClick}>
      {children}
    </ButtonStyle >
  )
}

export default ButtonRoot