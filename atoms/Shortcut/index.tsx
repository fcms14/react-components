import Icon from "../Icon"
import { theme } from "../../../providers/theme"
import ShortcutStyle, { ShorcutProps } from "./ShortcutStyle"
import Text from "../Text"
import { IconType } from "react-icons"

export interface ShortcutInterface {
  text: string,
  icon: IconType,
  onClick?: () => void,
  isExpanded: boolean,
  width?: number,
  color?: string,
  shortcutStyle?: ShorcutProps,
  isActive?: boolean,
}

const Shortcut = ({ text, icon, onClick, color, width, shortcutStyle, isExpanded }: ShortcutInterface) => {
  return (
    <ShortcutStyle onClick={onClick} cursor={onClick ? 'pointer' : 'inherit'} {...shortcutStyle}>
      <Icon
        icon={icon}
        color={color ?? theme.colors.header.font}
        width={width ?? Number(theme.fontsizes.title.bigger.match(/\d+/))}
      />
      {isExpanded && <Text color={color ?? theme.colors.header.font}>{text}</Text>}
    </ShortcutStyle>
  )
}

export default Shortcut