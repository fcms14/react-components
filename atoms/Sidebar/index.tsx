import { useTranslation } from "react-i18next"
import Shortcut, { ShortcutInterface } from "../Shortcut"
import SidebarStyle, { SidebarLiStyle } from "./SidebarStyle"

export interface SidebarInterface {
  items: ShortcutInterface[]
}

const Sidebar = ({ items }: SidebarInterface) => {
  const { t } = useTranslation()

  return (
    <SidebarStyle>
      {items.map((item, index) =>
        <SidebarLiStyle isActive={item.isActive}>
          <Shortcut shortcutStyle={{ flexDirection: "row" }} {...item} text={t(item.text)} key={index} />
        </SidebarLiStyle>
      )}
    </SidebarStyle>
  )
}

export default Sidebar