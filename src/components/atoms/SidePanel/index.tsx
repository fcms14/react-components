import GuestTemplate from "../../../templates/GuestTemplate"
import { BlurPage } from "../ModAlert/ModAlertStyle"
import SidePanelStyle from "./SidePanelStyle"

interface Interface {
  onClick: () => void
  children?: JSX.Element | JSX.Element[]
}

const SidePanel = ({ children, onClick }: Interface) => {
  return (
    <BlurPage onClick={onClick}>
      <SidePanelStyle onClick={(e) => e.stopPropagation()}>
        <GuestTemplate>
          {children}
        </GuestTemplate>
      </SidePanelStyle>
    </BlurPage>
  )
}

export default SidePanel