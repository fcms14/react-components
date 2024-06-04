import styled, { css } from 'styled-components'

const DropDownStyle = styled.div`  
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  width: fit-content;
  z-index: 3;
`

interface Props {
  cursor?: string
}

export const DropDownItemStyle = styled.div<Props>`
  display: flex;
  align-items: center;

  ${({ theme, cursor }) => css`
    padding: ${theme.padding.header};
    gap: ${theme.radius};
    cursor: ${cursor ?? 'inherit'};
  `}
`

export default DropDownStyle