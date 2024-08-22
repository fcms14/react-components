import DropPanelStyle, { DropPanelWrapper } from "./DropPanelStyle"

export interface DropPanelInterface {
  children: JSX.Element | JSX.Element[]
}

const DropPanel = ({ children }: DropPanelInterface) => {
  return (
    <DropPanelWrapper >
      <DropPanelStyle>
        {children}
      </DropPanelStyle>
    </DropPanelWrapper>
  )
}

export default DropPanel