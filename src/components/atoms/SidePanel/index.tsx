import AuthTemplate from "../../../templates/AuthTemplate"
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
        <AuthTemplate>
          {children}
        </AuthTemplate>
      </SidePanelStyle>
    </BlurPage>
  )
}

export default SidePanel