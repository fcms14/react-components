import styled, { css } from 'styled-components'
import { HeaderProps } from "../../../interfaces";
import { isMobile } from 'react-device-detect';

const Header = styled.header<HeaderProps>`
  display: flex;
  overflow: hidden;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 2;
  
  ${({ theme, height }) => css` 
    flex-direction: ${height ? "column" : "undefined"};
    height: ${height ?? "clamp(60px, 120px + 15vh, 50vh)"};
    padding: ${height ? theme.padding.main : "6vh"};
    background: ${isMobile ? theme.colors.header.fill : undefined}};
    gap: ${theme.gap};
  `}
`
export default Header