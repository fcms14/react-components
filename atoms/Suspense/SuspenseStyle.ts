import styled from "styled-components";

export interface SuspenseStyleProps {
    flexGrow?: number
}

const SuspenseStyle = styled.div<SuspenseStyleProps>`
    display: flex;
    flex-grow: ${({ flexGrow }) => flexGrow ?? 1};
    justify-content: center;
`

export default SuspenseStyle