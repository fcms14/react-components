import { BlurPage } from "../ModAlert/ModAlertStyle"
import UnderPanelStyle from "./UnderPanelStyle"

export interface UnderPanelInterface {
  onClick: () => void
  children?: JSX.Element | JSX.Element[]
}

const UnderPanel = ({ children, onClick }: UnderPanelInterface) => {
  return (
    <BlurPage onClick={onClick}>
      <UnderPanelStyle onClick={(e) => e.stopPropagation()}>
        {children}
      </UnderPanelStyle>
    </BlurPage>
  )
}

export default UnderPanel