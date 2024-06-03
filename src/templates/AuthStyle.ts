import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";

const AuthStyle = styled.div`
  display: ${isMobile ? "inherit" : "flex"};
  position: relative;

  ${!isMobile && css`
    > div {
      flex-grow: 1;
    }
  `}

  > nav {
    display: ${isMobile ? "none" : "flex"};
    height: 100dvh;
    width: 300px;
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.footer.fill};    
    padding: ${({ theme }) => theme.padding.main};
  }
`

export default AuthStyle