import styled, { css } from 'styled-components'

export interface ShorcutProps {
  flexDirection?: string,
  cursor?: string,
}

export const ShortcutStyle = styled.div<ShorcutProps>`
  display: flex;
  align-items: center;

  ${({ theme, flexDirection, cursor }) => css`
    padding: ${theme.padding.header};
    flex-direction: ${flexDirection ?? 'column'};
    gap: ${theme.radius};
    cursor: ${cursor ?? 'inherit'};
  `}
`

export default ShortcutStyle