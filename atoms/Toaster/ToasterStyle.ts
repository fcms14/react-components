import styled, { css, keyframes } from "styled-components"

const animation = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
`

const ToasterStyle = styled.div`
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
  width: clamp(220px, calc(220px + 20vw), 480px);

  > header {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: rgb(255 255 255 / 90%);
    justify-content: flex-end;
    padding: ${({ theme }) => `${theme.padding.main}`};
  }

  > main {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    ${({ theme }) => css`
      padding: ${theme.gap};
      gap: ${theme.gap};
    `}
  }
 
  ${({ theme }) => css`
    top: ${Number(theme.padding.main.match(/\d+/)) * 2}px;
    right: ${Number(theme.padding.main.match(/\d+/)) * 2}px;
    border-radius: ${theme.radius};
  `}
`

export default ToasterStyle