import MenuStyle from "./MenuStyle"
import { ShorcutProps, MenuProps, ShortcutInterface } from "../../../interfaces"
import Shortcut from "../Shortcut"

interface Interface {
  items: ShortcutInterface[]
  shortcutStyle?: ShorcutProps
  menuStyle?: MenuProps
}

const Menu = ({ items, shortcutStyle, menuStyle }: Interface) => {
  return (
    <MenuStyle {...menuStyle}>
      {items.map((item, index) => <Shortcut {...item} shortcutStyle={shortcutStyle} key={index} />)}
    </MenuStyle>
  )
}

export default Menu