import styled, { css } from "styled-components"

const LanguageSelectorStyle = styled.div`
    display: flex;
    position: fixed;

    ${({ theme }) => css`
        gap: ${theme.gap};
        bottom: ${theme.gap};
        right: ${theme.gap};
    `}

    > span {
        cursor: pointer;
    }
`

export default LanguageSelectorStyle