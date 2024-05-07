import styled, { css, keyframes } from "styled-components"
import { BalanceProps } from '../../../interfaces'

export const BalanceStyle = styled.div<BalanceProps> `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
position: relative;

width: 175px;
height: 62px;

${({ theme, type }) => css`
    padding : ${theme.padding.main};
    background: ${theme.colorByType[type]};
    border: ${type === 'balanceOne' ? '2px solid' : 'none'};
    border-color: ${type === 'balanceOne' ? theme.colorByType['balanceTwo'] : ''};   
    border-radius: ${theme.radius};
`}
`
export default BalanceStyle