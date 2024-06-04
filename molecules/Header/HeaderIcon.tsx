import Icon, { IconComponentInterface } from "../../atoms/Icon"
import { theme } from "../../../providers/theme"

const HeaderIcon = (props: IconComponentInterface) => {
  return (
    <Icon
      {...props}
      color={props.color ?? theme.colors.header.icon}
      applyPadding
    />
  )
}

export default HeaderIcon