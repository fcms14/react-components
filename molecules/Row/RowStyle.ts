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
  cursor?: string,
  gap?: string,
  overflowWrap?: string,
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
    overflow-wrap: ${props?.overflowWrap};
  `}

  ${({ theme, gap }) => css`
    gap: ${gap ?? theme.gap};
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

export const RowCopyStyle = styled.div<RowProps>`
  display: block;
  background-color: ${({ theme }) => `${theme.colors.background.copy}`};
  border-radius: 5px;
  border: 1px solid #ddd;
  position: relative;
  max-width: 100%;

  div {
    position: absolute;
    ${({ theme }) => css`
      right: ${theme.gap};
      top: ${theme.gap};
    `}
  }

  pre {
  ${({ theme }) => css`
      padding: ${theme.padding.main};
  `}
    font-family: monospace;
    white-space: pre-wrap;
  }
`

export default RowStyle