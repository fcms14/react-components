import styled, { css, keyframes } from "styled-components";
import { Field } from "formik";
import { getSize } from "../../helpers/helper";

export interface InputProps {

}

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
    bottom: 30%;
    right: 3%;
   
  }
`

export const LabelStyle = styled.label`
  position: absolute;
  overflow: hidden;
  width: 90%;
  text-wrap: nowrap;
    
  ${({ theme }) => css`
    bottom: ${theme.padding.main};
    padding-left: ${theme.padding.header};
    padding-bottom: ${theme.radius};
  `}
`

export const ErrorSpanStyle = styled.span`
  position: absolute;
  ${({ theme }) => css`
    bottom: -${getSize(theme.gap)}px;
    padding-left: ${theme.padding.header};
    padding-bottom: ${theme.radius};
  `}
`
const InputStyle = styled(Field) <InputProps>`
  font-family: 'InterSemiBold';
  -webkit-appearance: none;
  appearance: none;
  width: 100%;

  &::placeholder {
    opacity:0;
  }

  ${({ theme }) => css`
    border-bottom: ${theme.border} ${theme.colors.button.inactive};
    line-height: ${theme.fontsizes.title.bigger};
    padding: ${`${theme.padding.main} 0 0 ${theme.padding.header}`};

    &:focus, &:active {
      outline: none;
      border-bottom: ${theme.border} ${theme.colors.button.active};
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