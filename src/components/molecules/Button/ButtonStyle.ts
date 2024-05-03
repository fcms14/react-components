import styled, { css } from 'styled-components'
import { ButtonProps } from '../../../interfaces'

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.padding.main};
  padding: ${({ theme }) => `${theme.padding.header} ${theme.padding.main}`};
  gap: ${({ theme }) => theme.gap};
  border-radius: ${({ theme }) => theme.radius};

  ${props => props.secondary
    ? css`border: 1px solid ${props.active ? props.theme.colors.button.active : props.theme.colors.button.inactive};`
    : css`background-color: ${props.color ? props.color : props.active ? props.theme.colors.button.active : props.theme.colors.button.inactive};`
  }

  flex-direction: ${props => props.flexDirection};
  width: ${props => props.width};
`

export default ButtonStyle