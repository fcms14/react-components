import styled, { css, keyframes } from "styled-components";
import { InputProps } from "../../../interfaces";

export const InputSpanStyle = styled.span`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: ${({ theme }) => theme.padding.main};
`

interface Props {
  filled: boolean
}

const animation = keyframes`
  from {transform: translateY(0);}
  to {transform: translateY(-80%);}
`

export const LabelStyle = styled.label<Props>`
  position: absolute;
  
  ${({ filled, theme }) => css`
    bottom: ${theme.padding.main};
    padding-left: ${theme.padding.header};
    padding-bottom: ${theme.padding.header};

    animation: ${filled ? animation : 'none'} 0.3s ease forwards;
    font-size: ${filled ? theme.fontsizes.text.small : theme.fontsizes.text.default};
  `}
`

const InputStyle = styled.input<InputProps>`
  font-family: 'InterSemiBold';

  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.main.stroke};
    line-height: ${theme.fontsizes.title.bigger};
    padding: ${`${theme.padding.main} 0 0 ${theme.padding.header}`};
  `}

  &:focus {
    outline: none;
}
`

export default InputStyle