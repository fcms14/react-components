import styled, { css }  from 'styled-components'
import { HeaderProps } from "../../../interfaces";

const Header = styled.section<HeaderProps>`
display: flex;
height: 230px;

${props => css` 
justify-content: ${props?.justifyContent ? `${props?.alignitems}` : "center"};
align-items: ${props?.alignitems ? `${props?.alignitems}` : "center"};
background:  ${props?.backgroundColor ? `${props?.backgroundColor}` : "#1A1449"};
` }`
export default Header