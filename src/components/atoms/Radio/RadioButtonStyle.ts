import styled, { css }  from 'styled-components'

export const RadioButtonStyle = styled.div ` 
    display: inline-flex;
    margin-right: 16px;

  > input {
    width: 24px;
    height: 24px;
    appearance: none;
    border: 2px solid ${({ theme }) => theme.colors.main.font}; 
    border-radius: 50%;
    display: inline-block;
    position: relative;
    cursor: pointer;
    outline: none;
    margin-right: 8px;    
  }
  > input:checked::before {       
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px; 
    height: 12px;
    background-color: ${({ theme }) => theme.colors.main.font}; 
    border-radius: 50%;
    transform: translate(-50%, -50%);     
  }

`
export default RadioButtonStyle