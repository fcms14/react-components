import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";

export const NavStyle = styled.nav<Props>`
  display: ${isMobile ? "none" : "flex"};
  flex-direction: column;
  height: 100vh;
  width: ${({ isExpanded }) => (isExpanded ? "300px" : "50px")};
  position: sticky;
  top: 0;
  left: 0;
  overflow-y: auto;
  transition: width 0.3s;

  ${({ theme }) => css`
    background-color: ${theme.footer.fill};
    gap: ${theme.padding.main};
  `}
`

export const SpanLogoStyle = styled.span`
  ${({ theme }) => css`
    padding: ${theme.padding.main};
    > img {
      padding: ${theme.padding.main};
    }
  `}
`

const AuthStyle = styled.div`
  display: ${isMobile ? "inherit" : "flex"};
`

export const AuthBodyStyle = styled.div`
  flex-grow: ${isMobile ? undefined : 1};
  position: relative;
  display: flex;
  min-height: 100dvh;
  flex-direction: column;
`

export const AuthFooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 2;
  bottom: 0;
  padding-top: ${({ theme }) => theme.padding.header};
  padding-bottom: ${({ theme }) => theme.padding.header};
  background-color: ${({ theme }) => theme.footer.fill};
`

interface Props {
  isGuest?: boolean
  isExpanded?: boolean
}

// ToDo
export const BodyDefaultStyle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  min-height: ${({ isGuest }) => (!isGuest || isMobile) ? "100dvh" : "100%"};
  position: relative;

  > main {
      padding: ${({ isGuest }) => (isGuest && isMobile) ? "10vw" : undefined};
  }

  > main,
  > main > form, 
  > main > form > main {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
  }
  
  > main > form > main {
      justify-content: space-between;

      > section > div {
          display: flex;
      }
  }    

  > main > form > footer {
      display: flex;
      flex-direction: column;
      padding-bottom: ${({ theme }) => theme.padding.main};
  }

  > footer {

  }
`

export default AuthStyle