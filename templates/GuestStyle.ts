import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";

interface Props {
  isGuest?: boolean
}

const GuestStyle = styled.div<Props>`
  display: ${isMobile ? "block" : "flex"};
  align-items: center;
  min-height: ${({ isGuest }) => (!isGuest || isMobile) ? "100dvh" : "100%"};
  // position: relative;
`

export default GuestStyle