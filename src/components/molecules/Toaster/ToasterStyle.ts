import styled, { css } from 'styled-components'
import { ToasterProps } from '../../../interfaces'

const ToasterStyle = styled.div<ToasterProps >`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  ${({ theme, type }) => css`
    padding: ${theme.gap} ${theme.padding.main};
    gap: ${theme.gap};
    background: ${theme.colorByType[type]};
  `}
`

export default ToasterStyle