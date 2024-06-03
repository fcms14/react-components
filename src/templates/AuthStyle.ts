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
    flex-direction: column;
    height: 100dvh;
    width: 300px;
    position: sticky;
    top: 0;
    left: 0;

    ${({ theme }) => css`
      background-color: ${theme.footer.fill};
      gap: ${theme.padding.main};
      
      > span {
        padding: ${theme.padding.main};
        > img {
          padding: ${theme.padding.main};
        }
      }
    `
  }
`

export default AuthStyle