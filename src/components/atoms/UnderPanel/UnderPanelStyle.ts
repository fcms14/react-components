import { isMobile } from "react-device-detect";
import styled, { keyframes } from "styled-components"

const slideIn = keyframes`
  0% {transform: translateY(100%);}
  100% {transform: translateY(0);}
`;

export const UnderPanelStyle = styled.div`
  width: 100dvw;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 3;
  background: #FFFFFF;
  animation: ${slideIn} 0.382s ease-in-out;
`

export default UnderPanelStyle