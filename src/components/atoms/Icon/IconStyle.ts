
import styled from "styled-components"

interface Props {
  rounded?: boolean
}

const IconStyle = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  
  ${props => props.rounded && `
    background: ${props.theme.colors.main.stroke};
    border-radius: 50%;
  `}
`;

export default IconStyle