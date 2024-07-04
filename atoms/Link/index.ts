import styled from 'styled-components'

interface Props {
    light?: boolean
}

const Link = styled.a<Props>`
    cursor: pointer;
    font-weight: ${({ light }) => light ? "undefined" : "bold"};
`

export default Link