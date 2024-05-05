import styled, { css, keyframes } from 'styled-components'
import { ToasterProps } from '../../../interfaces'

const animation = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
`

const ToasterStyle = styled.div<ToasterProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  animation: ${animation} 1s ease;

  ${({ theme, type }) => css`
    padding: ${theme.gap};
    background: ${theme.colorByType[type]};
    border-radius: ${theme.radius};
  `}
`

export default ToasterStyle