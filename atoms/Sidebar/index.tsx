import { useTranslation } from "react-i18next"
import Shortcut, { ShortcutInterface } from "../Shortcut"
import SidebarStyle, { SidebarLiStyle, SpanLogoStyle } from "./SidebarStyle"
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { dispatchExpanded } from "../../../features/sideBar/sideBarDispatcher"

export interface SidebarInterface {
  items: ShortcutInterface[]
}

const Sidebar = ({ items }: SidebarInterface) => {
  const { t } = useTranslation()
  const { isExpanded } = useSelector((state: RootState) => state.sideBar)

  return (
    <SidebarStyle>
      <SidebarLiStyle>
        {isExpanded
          ? <SpanLogoStyle isExpanded={isExpanded}> <img src={import.meta.env.VITE_WHITE_LABEL_LOGO_MENU} /> </SpanLogoStyle>
          : <SpanLogoStyle> <img src={import.meta.env.VITE_WHITE_LABEL_LOGO_SMALL} /> </SpanLogoStyle>
        }
      </SidebarLiStyle>
      {items.map((item, index) =>
        <SidebarLiStyle isActive={item.isActive} isExpanded={isExpanded} key={index}>
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
          onClick={dispatchExpanded}
          isExpanded={isExpanded}
          text={t("Recolher")}
        />
      </SidebarLiStyle>
    </SidebarStyle>
  )
}

export default Sidebar