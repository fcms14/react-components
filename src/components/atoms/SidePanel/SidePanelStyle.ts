import { isMobile } from "react-device-detect";
import styled, { keyframes } from "styled-components"

const slideIn = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
`;

export const SidePanelStyle = styled.div`
  width: ${isMobile ? "100dvw" : "40dvw"};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  background: #FFFFFF;
  animation: ${slideIn} 1s ease-in-out;
`

export default SidePanelStyle