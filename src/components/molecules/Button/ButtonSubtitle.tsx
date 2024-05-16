import { ReactNode } from "react"
import { FontProps } from "../../../interfaces"
import { theme } from "../../../providers/theme"
import Subtitle from "../../atoms/Subtitle"

interface Interface {
  children: ReactNode,
  titleStyle?: FontProps
}

const ButtonSubtitle = ({ children, titleStyle }: Interface) => {
  return (
    <Subtitle {...titleStyle} color={titleStyle?.color ?? theme.colors.button.font}>
      {children}
    </Subtitle>
  )
}

export default ButtonSubtitle