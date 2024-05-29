import styled, { css } from 'styled-components'
import { HeaderProps } from "../../../interfaces";

const Header = styled.section<HeaderProps>`
  display: flex;
  overflow: hidden;  
  justify-content: center;
  flex-direction: column;  
  
  ${({ theme, dashboard }) => css` 
    height: "clamp(120px, 120px + 15vh, 50vh)";
    padding: ${dashboard ? `clamp(30px, 20px - 3vw, 20px)` : `clamp(120px, 20px - 3vw, 20px)`};
    background:  ${theme.colors.header.fill}};
  `}
`
export default Header