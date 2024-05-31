import styled, { css }  from 'styled-components'

export const CheckboxStyle = styled.div ` 
    display: inline-flex;
    margin-right: 16px;

  > input {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 2px solid ${({ theme }) => theme.colors.main.font}
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    margin-right: 8px;   
   
  }
  > input:checked::before {       
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.main.font}
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0    
     
  }

  > input:checked::after {       
    content: '✓';
    color: ${({ theme }) => theme.colors.main.fill}; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
     
  }

`
export default CheckboxStyle