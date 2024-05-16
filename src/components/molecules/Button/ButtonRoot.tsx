import { ReactNode } from "react"
import ButtonStyle from "./ButtonStyle"
import { ButtonProps } from "../../../interfaces"

interface Interface {
  onClick?: () => void,
  children: ReactNode,
  buttonStyle?: ButtonProps
}

const ButtonRoot = ({ children, buttonStyle, onClick }: Interface) => {
  const isActive = buttonStyle?.active && !buttonStyle.isLoading
  const _onClick = isActive ? onClick : undefined
  
  return (
    <ButtonStyle disabled={!isActive} {...buttonStyle} onClick={_onClick}>
      {children}
    </ButtonStyle >
  )
}

export default ButtonRoot