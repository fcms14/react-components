import GuestStyle from "../../templates/GuestStyle"
import { BlurPage } from "../ModAlert/ModAlertStyle"
import SidePanelStyle from "./SidePanelStyle"

export interface SidePanelInterface {
  onClick: () => void
  children?: JSX.Element | JSX.Element[]
}

const SidePanel = ({ children, onClick }: SidePanelInterface) => {
  return (
    <BlurPage onClick={onClick}>
      <SidePanelStyle onClick={(e) => e.stopPropagation()}>
        {children}
      </SidePanelStyle>
    </BlurPage>
  )
}

export default SidePanel