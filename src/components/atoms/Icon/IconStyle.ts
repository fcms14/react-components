
import styled from "styled-components"
import { IconProps } from "../../../interfaces";

const IconStyle = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.applyPadding ? props.theme.padding.icon : undefined};
  cursor: ${props => props.cursor};
  
  ${props => props.rounded && `
    background: ${props.theme.colors.main.stroke};
    padding: ${props.theme.padding.icon};
    border-radius: 50%;
  `}
`;

export default IconStyle