import styled, { css } from 'styled-components'
import { MenuProps } from '../../../interfaces'

const MenuStyle = styled.div<MenuProps>`
  display: flex;
  width: 100%;

  ${({ theme, justifyContent }) => css`
    gap: ${theme.gap};
    padding: ${theme.padding.main};
    justify-content: ${justifyContent ?? 'center'};
  `}
`

export default MenuStyle