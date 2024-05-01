
import styled from "styled-components"
import DefaulTheme from "../../providers/theme"

interface IconStyleInterface {
  rounded?: boolean
}

const IconStyle = styled.div<IconStyleInterface>`
  ${props => props.rounded && `
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${DefaulTheme.colors.SECONDARY[100]};
    padding: 0.5rem;
    border-radius: 50%;
  `}
`;
export default IconStyle