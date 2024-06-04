import MenuStyle, { MenuProps } from "./MenuStyle"
import { ShorcutProps } from "../Shortcut/ShortcutStyle"
import Shortcut, { ShortcutInterface } from "../Shortcut"

export interface MenuInterface {
  items: ShortcutInterface[],
  shortcutStyle?: ShorcutProps,
  menuStyle?: MenuProps,
}

const Menu = ({ items, shortcutStyle, menuStyle }: MenuInterface) => {
  return (
    <MenuStyle {...menuStyle}>
      {items.map((item, index) => <Shortcut {...item} shortcutStyle={shortcutStyle} key={index} />)}
    </MenuStyle>
  )
}

export default Menu