import Icon from "../../atoms/Icon"
import { theme } from "../../../providers/theme"
import { IconComponentInterface } from "../../../interfaces"

const RowIcon = (props: IconComponentInterface) => {
  return (
    <Icon
      {...props}
      color={props.color ?? theme.colors.main.icon}
    />
  )
}

export default RowIcon