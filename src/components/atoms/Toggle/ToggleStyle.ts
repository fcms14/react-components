
import styled from 'styled-components'
import { ToggleSpanProps } from '../../../interfaces'

export const ToggleSpanStyle = styled.span<ToggleSpanProps>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.gap};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
`

const ToggleStyle = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 28px;
    
    > input { 
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    > span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => props?.color ?? props.theme.colors.button.inactive};
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
    }
    
    > span:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    
    > input:checked + span {
        background-color: ${props => props?.color ?? props.theme.colors.button.active};
    }
    
    > input:checked + span:before {
        -webkit-transform: translateX(32px);
        -ms-transform: translateX(32px);
        transform: translateX(32px);
    }
`

export default ToggleStyle