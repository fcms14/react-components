import { ReactNode } from "react"
import { FontProps } from "../../atoms/Text"
import { theme } from "../../../providers/theme"
import Subtitle from "../../atoms/Subtitle"

export interface ButtonSubtitleInterface {
  children: ReactNode,
  titleStyle?: FontProps
}

const ButtonSubtitle = ({ children, titleStyle }: ButtonSubtitleInterface) => {
  return (
    <Subtitle {...titleStyle} color={titleStyle?.color ?? theme.colors.button.font}>
      {children}
    </Subtitle>
  )
}

export default ButtonSubtitle