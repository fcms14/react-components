import { ReactNode } from "react"
import ButtonStyle, { ButtonProps } from "./ButtonStyle"

export interface ButtonRootInterface {
  onClick?: () => void,
  children: ReactNode,
  buttonStyle?: ButtonProps
}

const ButtonRoot = ({ children, buttonStyle, onClick }: ButtonRootInterface) => {
  const isActive = buttonStyle?.active && !buttonStyle.isLoading
  const _onClick = isActive ? onClick : undefined

  return (
    <ButtonStyle disabled={!isActive} {...buttonStyle} onClick={_onClick}>
      {children}
    </ButtonStyle >
  )
}

export default ButtonRoot