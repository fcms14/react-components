import { ReactNode } from "react"
import { FontProps } from "../../../interfaces"
import { theme } from "../../../providers/theme"
import Text from "../../atoms/Text"

interface Interface {
  children: ReactNode,
  titleStyle?: FontProps
}

const ButtonText = ({ children, titleStyle }: Interface) => {
  return (
    <Text {...titleStyle} color={titleStyle?.color ?? theme.colors.button.font}>
      {children}
    </Text>
  )
}

export default ButtonText