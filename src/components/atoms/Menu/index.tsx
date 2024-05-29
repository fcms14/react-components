import MenuStyle from "./MenuStyle"
import {  MenuInterface } from "../../../interfaces"
import Shortcut from "../Shortcut"


const Menu = ({ items, shortcutStyle, menuStyle }: MenuInterface) => {
  return (
    <MenuStyle {...menuStyle}>
      {items.map((item, index) => <Shortcut {...item} shortcutStyle={shortcutStyle} key={index} />)}
    </MenuStyle>
  )
}

export default Menu