import styled, { css } from 'styled-components'
import { isMobile } from 'react-device-detect';

const CardBoxStyle = styled.div`
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  maxwidth: 50px; 
  height: 100px; 
`
export default CardBoxStyle