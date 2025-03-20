import styled, { css } from 'styled-components'
import { getSize } from '../../helpers/helper';

export interface ButtonProps {
  flexDirection?: string,
  width?: string,
  active?: boolean,
  isLoading?: boolean,
  secondary?: boolean,
  small?: boolean,
  color?: string,
  type?: "button" | "submit" | "reset" | undefined,
  whiteSpace?: string,
  flexGrow?: number,
  isColumn?: boolean
}

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

  ${({ theme, small, isColumn, flexGrow = 1 }) => css`
    ${small
      ? `
        flex-grow: ${flexGrow};
        padding: ${getSize(theme.padding.header) / 4}px ${theme.padding.header};
      `
      : `
        margin: ${isColumn ? Number(theme.padding.main) / 2 : Number(theme.padding.main)}; 
        padding: ${theme.padding.header} ${theme.padding.main};
      `}
  `}

  ${props => props.secondary
    ? css`border: 1px solid ${props.active ? props.theme.colors.button.active : props.theme.colors.button.inactive};`
    : css`background-color: ${props.color ? props.color : props.active ? props.theme.colors.button.active : props.theme.colors.button.inactive};`
  }
`

export default ButtonStyle