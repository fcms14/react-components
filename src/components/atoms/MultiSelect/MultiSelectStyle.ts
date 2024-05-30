import styled from "styled-components";
import { getSize } from "../../organisms/Button/helper";

interface Props {
  show: boolean
}

const MultiSelectStyle = styled.div<Props>`
  position: relative;

  > select {
    display: ${({ show }) => show ? 'flex' : 'none'};
    position: absolute;
    top: 70px;
    left: ${({ theme }) => theme.padding.main};
    z-index: 2;
    padding: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    width: calc(100% - ${({ theme }) => `${getSize(theme.padding.main) * 2}px`});
  }
`

export default MultiSelectStyle