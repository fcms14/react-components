
import styled from "styled-components"
import theme from "../../../../theme-config"

interface IconStyleInterface {
  rounded?: boolean
}

const IconStyle = styled.div<IconStyleInterface>`
${props => props.rounded && `
    display: flex;
    background: ${theme.colors.secondary};
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
  `}
`;
export default IconStyle