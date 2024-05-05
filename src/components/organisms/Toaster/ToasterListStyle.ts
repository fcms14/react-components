import styled, { css, keyframes } from "styled-components"

const animation = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
`

const ToasterListStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  animation: ${animation} 1s ease;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 80dvh;
 
  ${({ theme }) => css`
    top: ${Number(theme.padding.main.match(/\d+/)) * 2}px;
    right: ${Number(theme.padding.main.match(/\d+/)) * 2}px;
    padding: ${theme.gap};
    gap: ${theme.gap};
    border-radius: ${theme.radius};

    > div:first-child {
      display: flex;
      position: sticky;
      top: -${theme.gap};
      z-index: 1;
      background-color: #FFFFFF;
      padding: ${theme.padding.main};
    }
  `}
`

export default ToasterListStyle