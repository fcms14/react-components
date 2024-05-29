import styled, { css } from 'styled-components'
import { RowProps } from '../../../interfaces'

const RowStyle = styled.div<RowProps>`
  display: flex;

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

  ${({ theme }) => css`
    gap: ${theme.gap};
    padding: ${`${theme.gap} ${theme.padding.main}`};
  `}
`

export default RowStyle