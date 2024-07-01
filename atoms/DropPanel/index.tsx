import DropPanelStyle, { DropPanelWrapper } from "./DropPanelStyle"

export interface DropPanelInterface {
  onMouseLeave: () => void
  children: JSX.Element | JSX.Element[]
}

const DropPanel = ({ onMouseLeave, children }: DropPanelInterface) => {
  return (
    <DropPanelWrapper onMouseLeave={onMouseLeave}>
      <DropPanelStyle>
        {children}
      </DropPanelStyle>
    </DropPanelWrapper>
  )
}

export default DropPanel