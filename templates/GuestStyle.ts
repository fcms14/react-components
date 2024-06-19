import { isMobile } from "react-device-detect";
import styled from "styled-components";

const GuestStyle = styled.div`
  display: ${isMobile ? "block" : "flex"};
  min-height: 100dvh;
`

export const GuestMainStyle = styled.main`
  display: flex;  
  flex-direction: column;
  justify-content: ${isMobile ? undefined : "center"};
  position: relative;
  min-height: ${isMobile ? "100dvh" : "100%"};
  width: ${isMobile ? undefined : "40dvw"};
`

export const GuestAsideStyle = styled.aside`
  display: ${isMobile ? "none" : "flex"};
  background-color: ${({ theme }) => theme.colors.header.fill};
  min-height: 100dvh;
  flex-grow: 1;
`

export default GuestStyle