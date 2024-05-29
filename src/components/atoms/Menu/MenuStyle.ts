import styled, { css } from 'styled-components'
import { MenuProps } from '../../../interfaces'

const MenuStyle = styled.div<MenuProps>`
  display: flex;

  ${({ theme, justifyContent }) => css`
    gap: ${theme.gap};
    justify-content: ${justifyContent ?? 'center'};
  `}
`

export default MenuStyle