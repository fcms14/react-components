import styled, { css } from 'styled-components'

export interface MenuProps {
  justifyContent?: string,
  applyPadding?: boolean,
}

const MenuStyle = styled.div<MenuProps>`
  display: flex;
  width: 100%;
  overflow-x: auto;

  ${({ theme, justifyContent, applyPadding }) => css`
    gap: ${theme.gap};
    padding: ${applyPadding ? theme.padding.main : undefined};
    justify-content: ${justifyContent ?? 'center'};
  `}
`

export default MenuStyle