import { ReactNode } from "react"
import { theme } from "../../../providers/theme"
import Text, { FontProps } from "../../atoms/Text"

export interface ButtonTextInterface {
  children: ReactNode,
  titleStyle?: FontProps
}

const ButtonText = ({ children, titleStyle }: ButtonTextInterface) => {
  return (
    <Text {...titleStyle} color={titleStyle?.color ?? theme.colors.button.font}>
      {children}
    </Text>
  )
}

export default ButtonText