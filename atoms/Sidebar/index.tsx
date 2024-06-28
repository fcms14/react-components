import { useTranslation } from "react-i18next"
import Shortcut, { ShortcutInterface } from "../Shortcut"
import SidebarStyle, { SidebarLiStyle } from "./SidebarStyle"
import { useState } from "react"
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md"

export interface SidebarInterface {
  items: ShortcutInterface[]
}

const Sidebar = ({ items }: SidebarInterface) => {
  const { t } = useTranslation()
  // const { isExpanded } = useSelector((state: RootState) => state.sidebarState)

  return (
    <SidebarStyle>
      {/* <>
      </> */}
      {items.map((item, index) =>
        <SidebarLiStyle isActive={item.isActive} key={index}>
          <Shortcut
            {...item}
            shortcutStyle={{ flexDirection: "row" }}
            text={t(item.text)}
            isExpanded={isExpanded}
            key={index}
          />
        </SidebarLiStyle>
      )}
      <SidebarLiStyle isActive={false}>
        <Shortcut
          shortcutStyle={{ flexDirection: "row" }}
          icon={isExpanded ? MdArrowCircleLeft : MdArrowCircleRight}
          // onClick={dispatchVisibility}
          isExpanded={isExpanded}
          text={t("Recolher")}
        />
      </SidebarLiStyle>
    </SidebarStyle>
  )
}

export default Sidebar