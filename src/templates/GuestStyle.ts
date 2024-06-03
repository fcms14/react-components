import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";

const GuestStyle = styled.div`
  display: ${isMobile ? "inherit" : "flex"};
  align-items: center;

  ${!isMobile && css`
    > div {
      height: fit-content;
      width: 40dvw;
    }
  `}

  > aside {
    display: ${isMobile ? "none" : "flex"};
    background-color: ${({ theme }) => theme.colors.header.fill};
    height: 100dvh;
    flex-grow: 1;
  }
`

export default GuestStyle