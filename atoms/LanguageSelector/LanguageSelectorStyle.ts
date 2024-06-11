import styled, { css } from "styled-components"

const LanguageSelectorStyle = styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    
    ${({ theme }) => css`
        gap: ${theme.gap};
        bottom: ${theme.gap};
        right: ${theme.gap};
        background-color: ${theme.colorDefault.white};
        opacity: 0.2;
    `}

    :hover {
        opacity: 1
    }

    > span {
        cursor: pointer;
    }
`

export default LanguageSelectorStyle