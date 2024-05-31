import ViewPort from "../../../templates/ViewPort"
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
        <ViewPort>
          {children}
        </ViewPort>
      </SidePanelStyle>
    </BlurPage>
  )
}

export default SidePanel