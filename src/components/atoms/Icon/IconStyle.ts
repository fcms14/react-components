
import styled from "styled-components"

interface Props {
  cursor: string,
  rounded?: boolean,
  applyPadding?: boolean
}

const IconStyle = styled.div<Props>`
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