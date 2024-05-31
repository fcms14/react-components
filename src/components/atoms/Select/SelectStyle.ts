import styled from "styled-components";
import { getSize } from "../../organisms/Button/helper";

interface Props {
  selected?: boolean
}

const SelectStyle = styled.div`
  position: relative;
`

export const SelectNav = styled.nav`
  background: #FFFFFF;
  position: absolute;
  max-height: 220px;
  overflow-y: scroll;
  top: 70px;
  left: ${({ theme }) => theme.padding.main};
  z-index: 2;
  padding: ${({ theme }) => theme.padding.header};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  width: calc(100% - ${({ theme }) => `${getSize(theme.padding.main) * 2}px`});
`

export const SelectUl = styled.ul`

`

export const SelectLi = styled.li<Props>`
  background: ${({ theme, selected }) => selected ? theme.colorByType.info : theme.colorDefault.white};
  color:  ${({ theme, selected }) => selected ? theme.colors.button.font : undefined};
  width: 100%;
`

export default SelectStyle