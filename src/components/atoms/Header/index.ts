import styled, { css } from 'styled-components'
import { HeaderProps } from "../../../interfaces";

const Header = styled.section<HeaderProps>`
  display: flex;
  overflow: hidden;  
  justify-content: center;
  align-items: "center";
  
  ${({ theme, height }) => css` 
    height: ${height ?? "clamp(60px, 120px + 15vh, 50vh)"};
    padding: ${height ? "clamp(${theme.padding.guest}, 20px - 3vw, 20px)" : theme.padding.header};
    background:  ${theme.colors.header.fill}};
  `}
`
export default Header