import Icon, { IconComponentInterface } from "../Icon"
import { theme } from "../../../providers/theme"
import ShortcutStyle, { ShorcutProps } from "./ShortcutStyle"
import Text from "../Text"
import { isMobile } from "react-device-detect"

export interface ShortcutInterface {
  text: string,
  icon: IconComponentInterface,
  onClick?: () => void,
  isExpanded?: boolean,
  color?: string,
  shortcutStyle?: ShorcutProps,
  isActive?: boolean,
}

const Shortcut = ({ text, icon, onClick, color, shortcutStyle, isExpanded }: ShortcutInterface) => {
  return (
    <ShortcutStyle onClick={onClick} cursor={onClick ? 'pointer' : 'inherit'} {...shortcutStyle}>
      <Icon
        {...icon}
        color={color ?? theme.colors.header.font}
        width={icon?.width ?? Number(theme.fontsizes.title.bigger.match(/\d+/))}
      />
      {(isMobile || isExpanded) && <Text color={color ?? theme.colors.header.font}>{text}</Text>}
    </ShortcutStyle>
  )
}

export default Shortcut