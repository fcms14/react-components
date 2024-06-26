import { useTranslation } from "react-i18next"
import Shortcut, { ShortcutInterface } from "../Shortcut"
import SidebarStyle, { SidebarLiStyle } from "./SidebarStyle"

export interface SidebarInterface {
  items: ShortcutInterface[]
  isExpanded?: boolean
}

const Sidebar = ({ items, isExpanded }: SidebarInterface) => {
  const { t } = useTranslation()

  return (
    <SidebarStyle isExpanded={isExpanded}>
      {items.map((item, index) =>
        <SidebarLiStyle  isActive={item.isActive} key={index}>
          <Shortcut shortcutStyle={{ flexDirection: "row" }} {...item} text={t(item.text)} key={index} />
        </SidebarLiStyle>
      )}
    </SidebarStyle>
  )
}

export default Sidebar