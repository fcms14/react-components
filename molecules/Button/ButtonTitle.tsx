import { ReactNode } from "react"
import { FontProps } from "../../atoms/Text"
import { theme } from "../../../providers/theme"
import Title from "../../atoms/Title"

export interface ButtonTitleInterface {
  children: ReactNode,
  titleStyle?: FontProps
}

const ButtonTitle = ({ children, titleStyle }: ButtonTitleInterface) => {
  return (
    <Title {...titleStyle} color={titleStyle?.color ?? theme.colors.button.font}>
      {children}
    </Title>
  )
}

export default ButtonTitle