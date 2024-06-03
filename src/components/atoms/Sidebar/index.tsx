import { useTranslation } from "react-i18next"
import { ShortcutInterface } from "../../../interfaces"
import Shortcut from "../Shortcut"
import SidebarStyle, { SidebarLiStyle } from "./SidebarStyle"

interface Interface {
  items: ShortcutInterface[]
}

const Sidebar = ({ items }: Interface) => {
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