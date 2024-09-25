import Icon, { IconComponentInterface } from "../../atoms/Icon"
import { theme } from "../../../providers/theme"

const HeaderIcon = (props: IconComponentInterface) => {
  return (
    <Icon
      {...props}
      color={props.color ?? theme.colors.header.icon}
      width={props?.width ?? Number(theme.fontsizes.title.default.match(/\d+/))}
      applyPadding
    />
  )
}

export default HeaderIcon