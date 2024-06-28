import { useTranslation } from "react-i18next"
import Shortcut, { ShortcutInterface } from "../Shortcut"
import SidebarStyle, { SidebarLiStyle } from "./SidebarStyle"
import { useState } from "react"
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { dispatchVisibility } from "../../../features/sideBar/sideBarDispatcher"
import { SpanLogoStyle } from "../../templates/AuthStyle"

export interface SidebarInterface {
  items: ShortcutInterface[]
}

const Sidebar = ({ items }: SidebarInterface) => {
  const { t } = useTranslation()
  const { isExpanded } = useSelector((state: RootState) => state.sideBar)

  return (
    <SidebarStyle>
      {isExpanded ? <SpanLogoStyle> <img src={import.meta.env.VITE_WHITE_LABEL_LOGO_MENU} /> </SpanLogoStyle> : 'Icone da logo'}
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
          onClick={dispatchVisibility}
          isExpanded={isExpanded}
          text={t("Recolher")}
        />
      </SidebarLiStyle>
    </SidebarStyle>
  )
}

export default Sidebar