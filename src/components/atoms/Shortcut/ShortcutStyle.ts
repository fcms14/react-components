import styled, { css } from 'styled-components'
import { ShorcutProps } from '../../../interfaces'

export const ShortcutStyle = styled.div<ShorcutProps>`
  display: flex;
  align-items: center;
  border: 1px solid red;

  ${({ theme, flexDirection, cursor }) => css`
    padding: ${theme.padding.header};
    flex-direction: ${flexDirection ?? 'column'};
    cursor: ${cursor ?? 'inherit'};
  `}
`

export default ShortcutStyle