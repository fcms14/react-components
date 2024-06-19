import styled, { css, keyframes } from "styled-components";

interface Props {
  zIndex?: number;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const BlurPage = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100dvw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex ?? '3'};

  backdrop-filter: blur(4px);
  background: rgba(0,0,0,0.5);
  animation: ${fadeIn} 0.382s ease-in-out;
`

const ModAlertStyle = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;

  background: ${({ theme }) => theme.colorDefault.white};
  box-shadow: rgba(0 0 0 / 60%) 0 12px 64px;
  max-width: 80dvw;
  
  ${({ theme }) => css`
    border-radius: ${theme.radius};
    gap: ${theme.gap};
    padding: ${theme.padding.main} 0 ${theme.padding.header};
    
    
    > header, > main {
      padding: 0 ${theme.padding.main};
    }

    > footer {
      padding-top: ${theme.padding.main};
    }
  `}
`


export default ModAlertStyle