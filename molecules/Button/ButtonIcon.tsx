import Icon, { IconComponentInterface } from "../../atoms/Icon"
import { theme } from "../../../providers/theme"

const ButtonIcon = (props: IconComponentInterface) => {
  return (
    <Icon
      {...props}
      color={props.color ?? theme.colors.button.font}
    />
  )
}

export default ButtonIcon