import styled, { css } from 'styled-components'

const AvatarStyle = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.padding.header} 0;
    gap: ${theme.gap};
  `}
`

export default AvatarStyle