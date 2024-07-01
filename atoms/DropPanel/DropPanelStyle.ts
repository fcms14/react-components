import styled, { css } from 'styled-components'

const DropPanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 190px;
  top: -60px;
  z-index: 3;
  width: 330px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colorDefault.white};
  gap: ${({ theme }) => theme.gap};
`

interface Props {
  cursor?: string
}

export const DropPanelItemStyle = styled.div<Props>`
  display: flex;
  align-items: center;

  ${({ theme, cursor }) => css`
    padding: ${theme.padding.header} ${theme.padding.main};
    gap: ${theme.gap};
    cursor: ${cursor ?? 'inherit'};

    :hover {
      background-color: ${theme.colorByType.success};
    }
  `}
`

export const DropPanelWrapper = styled.div`
  position: relative;
`

export default DropPanelStyle