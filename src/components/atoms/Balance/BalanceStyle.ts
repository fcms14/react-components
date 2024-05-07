import styled, { css } from "styled-components"

export const BalanceStyle = styled.div`
    display: flex;
    flex-direction: column;

    > h2 {
        display: flex;
        justify-content: space-between;
    }

    ${({ theme }) => css`
        gap: ${theme.gap};
        padding : ${theme.padding.main};
        background-color: ${theme.colorByType.info};
        border-radius: ${theme.radius};

        > p, > h2, > div > svg { 
            color: ${theme.colors.button.font};
            fill: ${theme.colors.button.font};
        }
    `}
`
export default BalanceStyle