import styled, { css } from 'styled-components'
import { RowProps } from '../../../interfaces'

const RowStyle = styled.div<RowProps>`
  display: flex;
  flex-grow: 1;
  
 

  ${props => css`
    align-items: ${props?.alignItems ?? "center"};  
    justify-content: ${props?.justifyContent ?? "space-between"};
    
    flex-direction: ${props?.flexDirection};    
    background-color: ${props?.backgroundColor};
    border-bottom: ${props?.borderBottom};
    border-radius: ${props?.borderRadius};
    box-shadow: ${props?.boxShadow};
    position: ${props?.position};
    top: ${props?.top};
    margin-bottom: ${props?.marginBottom};
    
  `}

  ${props => css`
    gap: ${props.theme.gap};
    padding: ${  props?.padding ?  ` ${props.theme.gap}  ${props.padding} ` : ` ${props.theme.gap} ${props.theme.padding.main}` };
  `}
`

export default RowStyle