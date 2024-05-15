import styled, { css } from 'styled-components'
import { ButtonProps } from '../../../interfaces'
import { getSize } from '../../organisms/Button/helper'

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap};
  border-radius: ${({ theme }) => theme.radius};
  cursor: ${props => props.isLoading ? 'wait' : props.active ? "pointer" : "not-allowed"};
  flex-direction: ${props => props.flexDirection};
  width: ${props => props.width};
  white-space: ${props => props.whiteSpace};

  ${({ theme, small }) => css`
    ${small
      ? `
        margin: ${getSize(theme.padding.main) / 2}px;
        padding: ${getSize(theme.padding.header) / 2}px ${getSize(theme.padding.main)}px;
      ` : `
        margin: ${theme.padding.main};
        padding: ${theme.padding.header} ${theme.padding.main};
      `}
  `}

  ${props => props.secondary
    ? css`border: 1px solid ${props.active ? props.theme.colors.button.active : props.theme.colors.button.inactive};`
    : css`background-color: ${props.color ? props.color : props.active ? props.theme.colors.button.active : props.theme.colors.button.inactive};`
  }
`

export default ButtonStyle