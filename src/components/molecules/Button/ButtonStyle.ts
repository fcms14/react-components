import styled, { css } from 'styled-components'
import { ButtonProps } from '../../../interfaces'
import { theme } from "../../../providers/theme"

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.padding.main};
  padding: ${({ theme }) => `${theme.padding.header} ${theme.padding.main}`};
  gap: ${({ theme }) => theme.gap};
  border-radius: ${({ theme }) => theme.radius};
  cursor: ${props => props.isLoading ? 'wait' : props.active ? "pointer" : "not-allowed"};
  flex-direction: ${props => props.flexDirection};
  width: ${props => props.width};
  background-color: ${props => props.color ? props.color : props.active ? props.theme.colors.button.active : props.theme.colors.button.inactive};

  ${props =>
    props.secondary &&
    css`
    margin: 4px;
    background: #FFFFFF;
    border: 1px solid ${props.color};;
    border-radius: 2px;
    white-space: nowrap;    
    padding: 2px 0px;
    
    `}
`

export default ButtonStyle