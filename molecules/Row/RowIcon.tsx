import Icon, { IconComponentInterface } from "../../atoms/Icon"
import { theme } from "../../../providers/theme"

const RowIcon = (props: IconComponentInterface) => {
  return (
    <Icon
      {...props}
      color={props.color ?? theme.colors.main.icon}
    />
  )
}

export default RowIcon