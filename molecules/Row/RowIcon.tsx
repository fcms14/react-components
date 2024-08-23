import Icon, { IconComponentInterface } from "../../atoms/Icon"
import { theme } from "../../../providers/theme"

const RowIcon = (props: IconComponentInterface) => {
  return (
    <Icon
      {...props}
      color={props?.color ?? theme.colors.main.icon}
      width={props?.width ?? Number(theme.fontsizes.title.default.match(/\d+/))}
    />
  )
}

export default RowIcon