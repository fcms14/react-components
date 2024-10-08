
import styled, { css } from 'styled-components'

export interface ToggleSpanProps {
  justifyContent?: string,
  flexDirection?: string,
  color?: string,
}

const ToggleStyle = styled.span<ToggleSpanProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${props => props.flexDirection};
  
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
      border-radius: ${theme.toggle};
      height: ${theme.toggle};
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

  input:checked::before {
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
  }
`

export default ToggleStyle