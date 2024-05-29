import Icon from "../Icon"
import { theme } from "../../../providers/theme"
import ShortcutStyle from "./ShortcutStyle"
import Text from "../Text"
import { ShortcutInterface } from "../../../interfaces"

const Shortcut = ({ text, icon, onClick, color, width, shortcutStyle }: ShortcutInterface) => {
  return (
    <ShortcutStyle onClick={onClick} cursor={onClick ? 'pointer' : 'inherit'} {...shortcutStyle}>
      <Icon
        icon={icon}
        color={color ?? theme.colors.header.font}
        width={width ?? Number(theme.fontsizes.title.bigger.match(/\d+/))}
      />
      <Text color={color ?? theme.colors.header.font}>{text}</Text>
    </ShortcutStyle>
  )
}

export default Shortcut