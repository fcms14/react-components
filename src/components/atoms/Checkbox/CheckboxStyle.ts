import styled, { css } from 'styled-components'

interface Props {
  color?: string
}

export const CheckboxStyle = styled.div<Props>` 
  display: flex;
  
  > label {
    cursor: pointer;
  }

  ${({ theme }) => `
    gap: ${theme.gap};
    padding: ${theme.padding.icon};
  `}

  input[type="checkbox"] {
    cursor: pointer;
    appearance: none;
    ${({ theme, color }) => css`
      width: ${theme.fontsizes.title.big};
      height: ${theme.fontsizes.title.big};
      border: 3px solid ${color ?? theme.colors.button.active};
      border-radius: ${theme.radius};
    `}    
  }

  input[type="checkbox"]:checked {
    ${({ theme, color }) => css`
      border: 1px solid ${color ?? theme.colors.button.active};
      background-color: ${color ?? theme.colors.button.active};
    `}
  }

  input[type="checkbox"]:checked::before {
    content: '✔';
    display: block;
    text-align: center;
    ${({ theme }) => css`
      color: ${theme.colors.button.font};
      font-size: ${theme.fontsizes.title.default};
      line-height: ${theme.fontsizes.title.big};
    `}
  }
`
export default CheckboxStyle