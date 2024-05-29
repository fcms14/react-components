import styled, { css } from 'styled-components'
import { HeaderProps } from "../../../interfaces";

const Header = styled.section<HeaderProps>`
  display: flex;
  overflow: hidden;
  height: 230px;
  justify-content: center;
  align-items: "center";
  
  ${({ theme }) => css` 
    padding: ${theme.padding.guest};
    background:  ${theme.colors.header.fill}};
  `}
`
export default Header