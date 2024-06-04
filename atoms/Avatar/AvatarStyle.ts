import styled, { css, keyframes } from 'styled-components'

export const moveDown = keyframes`
  0% {transform: translateY(0);}
  100% {transform: translateY(25%);}
`;

const AvatarStyle = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.padding.header} 0;
    gap: ${theme.gap};
  `}

  :hover {
    > div:nth-child(3) {
      animation: ${moveDown} 1s ease-in-out infinite;
    }
  }
`

export default AvatarStyle