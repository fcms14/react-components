import styled, { css } from 'styled-components'

interface Props {
  isActive?: boolean
  isExpanded?: boolean
}

const SidebarStyle = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  width: 100%; 

  ${({ theme, isExpanded }) => css`
    gap: ${!isExpanded ? '30px' : theme.gap };
    align-items: ${isExpanded ? '' : 'center'};
  `}
`

export const SidebarLiStyle = styled.li<Props>`
  ${({ theme, isActive }) => css`
    padding: ${({ theme }) => theme.padding.main};
    border-right: ${isActive ? `10px solid ${theme.colors.header.font}` : ""};
  `}
`

export default SidebarStyle