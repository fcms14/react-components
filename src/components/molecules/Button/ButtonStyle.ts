import styled, { css } from 'styled-components'
import { ButtonProps } from '../../../interfaces'

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.825rem;
  padding: 0.75rem 1rem;
  gap: 0.5rem;
  border-radius: 4px;

  ${props => props.secondary
    ? css`border: 1px solid ${props.active ? props.theme.colors.button.active : props.theme.colors.button.inactive};`
    : css`background-color: ${props.active ? props.theme.colors.button.active : props.theme.colors.button.inactive};`
  }

  flex-direction: ${props => props.flexDirection};
  width: ${props => props.width};
`

export default ButtonStyle