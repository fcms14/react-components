import styled, { css } from "styled-components"

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: auto;
    ${({ theme }) => css`
        padding: 0 ${theme.padding.main} ${theme.padding.header};
        gap: ${theme.padding.header};
    `}
`

export default Nav