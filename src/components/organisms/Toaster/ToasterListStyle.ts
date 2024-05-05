import styled, { css } from "styled-components"

const ToasterListStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  
  ${({ theme }) => css`
    top: ${Number(theme.padding.main.match(/\d+/))*2}px;
    right: ${Number(theme.padding.main.match(/\d+/))*2}px;
    padding: ${theme.gap};
    gap: ${theme.gap};
    border-radius: ${theme.radius};
  `}
`

export default ToasterListStyle