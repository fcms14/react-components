import { BlurPage } from "../ModAlert/ModAlertStyle"
import UnderPanelStyle from "./UnderPanelStyle"

interface Interface {
  onClick: () => void
  children?: JSX.Element | JSX.Element[]
}

const UnderPanel = ({ children, onClick }: Interface) => {
  return (
    <BlurPage onClick={onClick}>
      <UnderPanelStyle onClick={(e) => e.stopPropagation()}>
        {children}
      </UnderPanelStyle>
    </BlurPage>
  )
}

export default UnderPanel