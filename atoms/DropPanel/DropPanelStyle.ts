import styled from 'styled-components'

const DropPanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 190px;
  top: 60px;
  z-index: 3;
  max-width: 330px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colorDefault.white};
  gap: ${({ theme }) => theme.gap};
  border-radius: ${({ theme }) => theme.radius};
`

export const DropPanelWrapper = styled.div`
  position: relative;
`

export default DropPanelStyle