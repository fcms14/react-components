
import styled from "styled-components"

interface Props {
  cursor: string,
  rounded?: boolean,
}

const IconStyle = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.icon};
  cursor: ${props => props.cursor};
  
  ${props => props.rounded && `
    background: ${props.theme.colors.main.stroke};
    border-radius: 50%;
  `}
`;

export default IconStyle