import styled, { css, keyframes } from "styled-components";
import { InputProps } from "../../../interfaces";
import { Field } from "formik";
import { getSize } from "../../organisms/Button/helper";

const focusOn = keyframes`
  from {transform: translateY(-60%) translateX(-10%) scale(0.8);}
  to {transform: translateY(-80%) translateX(0) scale(1);}
`;

const focusOut = keyframes`
  from {transform: translateY(-80%);}
  to {transform: translateY(0);}
`

const reduce = keyframes`
  from {transform: translateY(-80%) translateX(0) scale(1);}
  to {transform: translateY(-80%) translateX(-10%) scale(0.8);}
`;

export const InputSpanStyle = styled.span`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  padding: ${({ theme }) => theme.padding.main};

  > div {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
`

export const LabelStyle = styled.label`
  position: absolute;
  
  ${({ theme }) => css`
    bottom: ${theme.padding.main};
    padding-left: ${theme.padding.header};
    padding-bottom: ${theme.padding.header};
  `}
`

export const ErrorSpanStyle = styled.span`
  position: absolute;
  ${({ theme }) => css`
    bottom: -${getSize(theme.gap)}px;
    padding-left: ${theme.padding.header};
    padding-bottom: ${theme.padding.header};
  `}
`
const InputStyle = styled(Field) <InputProps>`
  font-family: 'InterSemiBold';

  &::placeholder {
    opacity:0;
  }

  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.button.inactive};
    line-height: ${theme.fontsizes.title.bigger};
    padding: ${`${theme.padding.main} 0 0 ${theme.padding.header}`};

    &:focus, &:active {
      outline: none;
      border-bottom: 1px solid ${theme.colors.button.active};
      padding-bottom: 0.125rem;
    }
    
    &:focus:placeholder-shown + label {
      animation: ${focusOn} 0.3s ease forwards;
    }

    &:not(:focus):placeholder-shown + label {
      animation: ${focusOut} 0.3s ease forwards; 
    }

    &:not(:placeholder-shown) + label{
      animation: ${reduce} 0.3s ease forwards;
    }
  `}
`

export default InputStyle