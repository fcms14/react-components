import { ReactNode } from "react"
import { FontProps } from "../../../interfaces"
import { theme } from "../../../providers/theme"
import Title from "../../atoms/Title"

interface Interface {
  children: ReactNode,
  titleStyle?: FontProps
}

const ButtonTitle = ({ children, titleStyle }: Interface) => {
  return (
    <Title {...titleStyle} color={titleStyle?.color ?? theme.colors.button.font}>
      {children}
    </Title>
  )
}

export default ButtonTitle