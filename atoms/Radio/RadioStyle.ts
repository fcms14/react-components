import styled, { css } from 'styled-components'

interface Props {
  color?: string
}

export const RadioStyle = styled.span<Props>` 
  display: flex;

  > label {
    cursor: pointer;
  }

  ${({ theme }) => `
    gap: ${theme.gap};
    padding: ${theme.padding.icon};
  `}

  input[type="radio"] {
    cursor: pointer;
    position: relative;
    appearance: none;
    ${({ theme, color }) => css`
      width: ${theme.fontsizes.title.big};
      height: ${theme.fontsizes.title.big};
      border: 3px solid ${color ?? theme.colors.button.active};
      border-radius: 50%;
    `}
  }

  input[type="radio"]:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%; 
    height: 50%;
    background-color: ${({ theme }) => theme.colors.button.active}; 
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`
export default RadioStyle