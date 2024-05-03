import Icon from "../../atoms/Icon"
import { theme } from "../../../providers/theme"
import { IconComponentInterface } from "../../../interfaces"

const ButtonIcon = (props: IconComponentInterface) => {
  return (
    <Icon
      {...props}
      color={props.color ?? theme.colors.button.font}
    />
  )
}

export default ButtonIcon