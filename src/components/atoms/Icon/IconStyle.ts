
import styled, { css, keyframes } from "styled-components"
import { IconProps } from "../../../interfaces";

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const IconStyle = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.applyPadding ? props.theme.padding.icon : undefined};
  cursor: ${props => props.cursor};

  ${props => props.topRight && css`
    position: absolute;
    top: ${props.theme.gap};
    right: 8px;
  `}
  
  ${props => props.loading && css`
    animation: ${animation} 1s linear infinite;
  `}

  ${props => props.rounded && `
    background: ${props.theme.colors.main.stroke};
    padding: ${props.theme.padding.icon};
    border-radius: 50%;
  `}
`;

export default IconStyle