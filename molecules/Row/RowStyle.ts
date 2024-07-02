import styled, { css } from 'styled-components'

export interface RowProps {
  justifyContent?: string,
  position?: string,
  top?: string,
  backgroundColor?: string,
  borderBottom?: string,
  boxShadow?: string,
  marginBottom?: string,
  flexDirection?: string,
  alignItems?: string,
  borderRadius?: string,
  cursor?: string
}

const RowStyle = styled.div<RowProps>`
  display: flex;

  ${props => css`
    align-items: ${props?.alignItems ?? "center"};
    justify-content: ${props?.justifyContent ?? "space-between"};
    
    cursor: ${props?.cursor};
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

export const RowHeaderStyle = styled.div<RowProps>`
  display: flex;

  ${props => css`
    align-items: ${props?.alignItems ?? "center"};
    justify-content: ${props?.justifyContent ?? "space-between"};
    
    cursor: ${props?.cursor};
    flex-direction: ${props?.flexDirection};
    background-color: ${props?.backgroundColor ?? props.theme.colorDefault.white};
    border-bottom: ${props?.borderBottom};
    border-radius: ${props?.borderRadius};
    box-shadow: ${props?.boxShadow};
    position: sticky;
    top: 0;
    z-index: 1;
    margin-bottom: ${props?.marginBottom};
  `}

  ${({ theme }) => css`
    gap: ${theme.gap};
    padding: ${`${theme.gap} ${theme.padding.main}`};
  `}
`

export default RowStyle