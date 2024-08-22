import styled from 'styled-components'

const DropPanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 70%; 
  transform: translateX(-50%);
  z-index: 3;
  width: 30%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colorDefault.white};
  gap: ${({ theme }) => theme.gap};
  border-radius: ${({ theme }) => theme.radius};
`

export const DropPanelWrapper = styled.div`
  position: relative;
  top: -5%;
`

export default DropPanelStyle