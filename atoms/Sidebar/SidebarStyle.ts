import styled, { css } from 'styled-components'

interface Props {
  isActive?: boolean
}

const SidebarStyle = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => css`
    gap: ${theme.gap};
  `}
`

export const SidebarLiStyle = styled.li<Props>`
  ${({ theme, isActive }) => css`
    padding: ${({ theme }) => theme.padding.main};
    border-right: ${isActive ? `10px solid ${theme.colors.header.font}` : ""};
  `}
`

export default SidebarStyle