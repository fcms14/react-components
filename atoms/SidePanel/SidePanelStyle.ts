import { isMobile } from "react-device-detect";
import styled, { keyframes } from "styled-components"

const slideIn = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
`;

export const SidePanelStyle = styled.div`
  display: "flex";
  width: ${isMobile ? "100dvw" : "40dvw"};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  height: 100dvh;
  overflow-y: auto;
  background: #FFFFFF;
  animation: ${slideIn} 0.618s ease-in-out;
`

export default SidePanelStyle