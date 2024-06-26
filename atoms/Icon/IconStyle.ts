
import styled, { css, keyframes } from "styled-components"

export interface IconProps {
  cursor: string,
  rounded?: boolean,
  applyPadding?: boolean,
  isLoading?: boolean,
}

const animation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`

const IconStyle = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.applyPadding ? props.theme.padding.icon : undefined};
  cursor: ${props => props.cursor};
  
  ${props => props.isLoading && css`
    animation: ${animation} 1s linear infinite;
  `}

  ${props => props.rounded && `
    background: ${props.theme.colors.main.stroke};
    padding: ${props.theme.padding.icon};
    border-radius: 50%;
  `}
`;

export default IconStyle