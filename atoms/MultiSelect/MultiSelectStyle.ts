import styled from "styled-components";
import { getSize } from "../../helpers/helper";

interface Props {
  show: boolean
}

const MultiSelectStyle = styled.div<Props>`
  position: relative;

  > select {
    display: ${({ show }) => show ? 'flex' : 'none'};
    position: absolute;
    top: 80%;
    left: ${({ theme }) => theme.padding.main};
    z-index: 2;
    padding: ${({ theme }) => theme.padding.header};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    width: calc(100% - ${({ theme }) => `${getSize(theme.padding.main) * 2}px`});

    &:focus, &:active {
      outline: none;
    }

    > option:checked,
    > option:hover,
    > option:focus,
    > option:active { 
      background: ${({ theme }) => theme.colorByType.info};
      color:  ${({ theme }) => theme.colors.button.font};
    }
  }
`

export default MultiSelectStyle