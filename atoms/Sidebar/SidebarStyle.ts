import styled, { css } from 'styled-components'

interface Props {
  isActive?: boolean
  isExpanded?: boolean
}

const SidebarStyle = styled.ul`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.gap};
  `}
`

export const SidebarLiStyle = styled.li<Props>`
  ${({ theme, isActive, isExpanded }) => css`
    padding: ${({ theme }) => theme.padding.main};
    border-right: ${(isExpanded && isActive) ? `10px solid ${theme.colors.header.font}` : "undefined"};
  `}
`

export const SpanLogoStyle = styled.span<Props>`
  display: flex;
  
  ${({ theme, isExpanded }) => css`
    width: ${isExpanded ? "240px" : "60px"};
    padding: ${isExpanded ? theme.padding.main : `${theme.padding.main} 0`};
  `}
`

export default SidebarStyle