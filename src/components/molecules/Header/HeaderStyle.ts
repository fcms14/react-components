import styled from 'styled-components'

interface Props {
    justifyContent?: string
}

const HeaderStyle = styled.header<Props>`
    display: flex;
    align-items: center;
    justify-content: ${props => props?.justifyContent ?? "space-between"};
    padding: ${({ theme }) => `0 ${theme.padding.header}`};
    height: 3.5rem;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.header.fill};
`

export default HeaderStyle