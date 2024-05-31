import ViewPort from "../../../templates/ViewPort"
import { BlurPage } from "../ModAlert/ModAlertStyle"
import SidePanelStyle from "./SidePanelStyle"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

const SidePanel = ({ children }: Interface) => {
  return (
    <BlurPage onClick={() => console.log(1)}>
      <SidePanelStyle onClick={(e) => e.stopPropagation()}>
        <ViewPort>
          {children}
        </ViewPort>
      </SidePanelStyle>
    </BlurPage>
  )
}

export default SidePanel