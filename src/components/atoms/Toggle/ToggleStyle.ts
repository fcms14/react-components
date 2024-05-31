
import styled, { css } from 'styled-components'
import { ToggleSpanProps } from '../../../interfaces'

const ToggleStyle = styled.label<ToggleSpanProps>`
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
    position: relative;
    appearance: none;
    width: 60px;
    height: 28px;
    border-radius: 34px;

    ${({ theme, color }) => css`
      background-color: ${color ?? theme.colors.button.inactive};
    `}
  }

  input[type="checkbox"]::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  input[type="checkbox"]:checked {
    ${({ theme, color }) => css`
      background-color: ${color ?? theme.colors.button.active};
    `}
  }

  > input:checked::before {
      -webkit-transform: translateX(32px);
      -ms-transform: translateX(32px);
      transform: translateX(32px);
  }
`

export default ToggleStyle