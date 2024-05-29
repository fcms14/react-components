import styled, { css } from 'styled-components'
import { HeaderProps } from "../../../interfaces";

const Header = styled.section<HeaderProps>`
  display: flex;
  overflow: hidden;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 4;
  
  ${({ theme, height }) => css` 
    flex-direction: ${height ? "column" : "undefined"};
    height: ${height ?? "clamp(60px, 120px + 15vh, 50vh)"};
    padding: ${height ? theme.padding.main : `clamp(${theme.padding.guest}, 20px - 3vw, 20px)`};
    background: ${theme.colors.header.fill}};
    gap: ${theme.gap};
  `}
`
export default Header