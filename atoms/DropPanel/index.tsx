import { useRef } from "react";
import DropPanelStyle, { DropPanelWrapper } from "./DropPanelStyle"

export interface DropPanelInterface {
  onMouseLeave?: () => void
  children: JSX.Element | JSX.Element[]
}

const DropPanel = ({ children, onMouseLeave }: DropPanelInterface) => {
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      onMouseLeave?.();
    }, 1000);
  };

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  return (
    <DropPanelWrapper onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      <DropPanelStyle>
        {children}
      </DropPanelStyle>
    </DropPanelWrapper>
  )
}

export default DropPanel