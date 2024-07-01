import styled, { css } from 'styled-components'

const DropDownStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 16px;
  top: 24px;
  z-index: 3;
  width: max-content;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colorDefault.white};
  gap: ${({ theme }) => theme.gap};
`

interface Props {
  cursor?: string
}

export const DropDownItemStyle = styled.div<Props>`
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

export const DropDownWrapper = styled.div`
  position: relative;
`

export default DropDownStyle